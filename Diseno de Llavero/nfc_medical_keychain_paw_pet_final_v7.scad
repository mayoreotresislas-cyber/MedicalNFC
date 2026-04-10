$fn = 180;

show_model = is_undef(user_show_model) ? true : user_show_model;
show_front_preview = is_undef(user_show_front_preview) ? false : user_show_front_preview;
show_back_preview = is_undef(user_show_back_preview) ? false : user_show_back_preview;

font_name = "Segoe UI:style=Bold";

thickness = 4.0;

nfc_tag_d = 25.0;
nfc_clearance = 0.5;
nfc_d = nfc_tag_d + nfc_clearance;
nfc_t = 1.0;
bottom_solid = 2.2;

hole_d = 5.0;
hole_x = 5.8;
hole_y = 35.0;

relief_h = 0.62;
join_eps = 0.04;
text_bold = 0.085;

// Leave the internal art untouched; only the outer paw changes.
design_cy = 15.8;
front_cross_y = 12.7;
front_waves_y = 17.9;
back_phone_y = 15.0;
markers_x = 8.9;
markers_y = 15.4;

function char_units(ch) =
    ch == " " ? 0.24 :
    ch == "I" ? 0.33 :
    ch == "J" ? 0.42 :
    ch == "L" ? 0.54 :
    ch == "M" ? 0.92 :
    ch == "W" ? 0.96 :
    ch == "A" ? 0.78 :
    ch == "B" ? 0.77 :
    ch == "C" ? 0.77 :
    ch == "D" ? 0.79 :
    ch == "E" ? 0.68 :
    ch == "F" ? 0.66 :
    ch == "G" ? 0.80 :
    ch == "H" ? 0.80 :
    ch == "K" ? 0.74 :
    ch == "N" ? 0.80 :
    ch == "O" ? 0.80 :
    ch == "P" ? 0.73 :
    ch == "Q" ? 0.80 :
    ch == "R" ? 0.75 :
    ch == "S" ? 0.70 :
    ch == "T" ? 0.64 :
    ch == "U" ? 0.78 :
    ch == "V" ? 0.75 :
    ch == "X" ? 0.74 :
    ch == "Y" ? 0.73 :
    ch == "Z" ? 0.68 :
    0.74;

function list_sum(v, i = 0) = i >= len(v) ? 0 : v[i] + list_sum(v, i + 1);
function prefix_sum(v, n) = n <= 0 ? 0 : list_sum([for (i = [0:n - 1]) v[i]]);

module rounded_rect_2d(w, h, r) {
    offset(r = r)
        square([w - 2 * r, h - 2 * r], center = true);
}

module rounded_arc_2d(radius, stroke, a0, a1, step = 5) {
    for (a = [a0:step:a1 - step]) {
        next_a = min(a + step, a1);
        hull() {
            translate([radius * cos(a), radius * sin(a)]) circle(d = stroke);
            translate([radius * cos(next_a), radius * sin(next_a)]) circle(d = stroke);
        }
    }
}

module thick_text(ch, size, grow = text_bold) {
    offset(delta = grow)
        text(ch, size = size, font = font_name, halign = "center", valign = "center");
}

module arc_text_top(str, radius, center_angle, size, cy, span_deg, gap_units = 0.26) {
    widths = [for (i = [0:len(str) - 1]) char_units(str[i])];
    total_units = list_sum(widths) + gap_units * (len(str) - 1);
    deg_per_unit = span_deg / total_units;
    start = center_angle + span_deg / 2;

    for (i = [0:len(str) - 1]) {
        track = prefix_sum(widths, i) + gap_units * i + widths[i] / 2;
        ang = start - deg_per_unit * track;
        translate([radius * cos(ang), cy + radius * sin(ang), 0])
            rotate([0, 0, ang - 90])
                thick_text(str[i], size);
    }
}

module arc_text_bottom(str, radius, center_angle, size, cy, span_deg, gap_units = 0.20) {
    widths = [for (i = [0:len(str) - 1]) char_units(str[i])];
    total_units = list_sum(widths) + gap_units * (len(str) - 1);
    deg_per_unit = span_deg / total_units;
    start = center_angle - span_deg / 2;

    for (i = [0:len(str) - 1]) {
        track = prefix_sum(widths, i) + gap_units * i + widths[i] / 2;
        ang = start + deg_per_unit * track;
        translate([radius * cos(ang), cy + radius * sin(ang), 0])
            rotate([0, 0, ang + 90])
                thick_text(str[i], size);
    }
}

module emboss_top() {
    translate([0, 0, thickness - join_eps])
        linear_extrude(height = relief_h + join_eps)
            children();
}

module emboss_bottom() {
    translate([0, 0, -relief_h])
        linear_extrude(height = relief_h + join_eps)
            children();
}

module main_pad_2d() {
    // Larger and more icon-like central paw pad with a clear top hump
    // and a visible lower center curve, matching the reference silhouette.
    difference() {
        offset(r = 0.8)
            offset(delta = -0.8)
                union() {
                    hull() {
                        translate([-11.8, 6.0]) scale([1.24, 1.02]) circle(r = 7.4);
                        translate([11.8, 6.0]) scale([1.24, 1.02]) circle(r = 7.4);
                        translate([0, 19.4]) scale([0.96, 1.14]) circle(r = 6.9);
                    }

                    hull() {
                        translate([-12.6, 11.8]) scale([1.08, 0.96]) circle(r = 6.5);
                        translate([-4.4, 22.6]) scale([0.90, 1.00]) circle(r = 5.8);
                    }

                    hull() {
                        translate([12.6, 11.8]) scale([1.08, 0.96]) circle(r = 6.5);
                        translate([4.4, 22.6]) scale([0.90, 1.00]) circle(r = 5.8);
                    }
                }

        translate([0, -1.05])
            scale([1.06, 0.43])
                circle(r = 6.9);
    }
}

module paw_2d() {
    union() {
        main_pad_2d();

        // Toes overlap the pad directly so the silhouette reads as a true paw.
        translate([-16.6, 23.2]) rotate(8) scale([0.82, 1.26]) circle(r = 5.0);
        translate([-5.8, 29.0]) rotate(-2) scale([0.84, 1.58]) circle(r = 5.0);
        translate([5.8, 29.3]) rotate(2) scale([0.84, 1.70]) circle(r = 5.0);
        translate([16.6, 23.4]) rotate(-8) scale([0.82, 1.26]) circle(r = 5.0);
    }
}

module body_3d() {
    linear_extrude(height = thickness)
        paw_2d();
}

module ring_hole() {
    translate([hole_x, hole_y, -0.1])
        cylinder(d = hole_d, h = thickness + 0.2);
}

module nfc_cavity() {
    translate([0, design_cy, bottom_solid])
        cylinder(d = nfc_d, h = nfc_t + 0.01);
}

module side_marker_2d(size = 1.45, arm_w = 0.34) {
    union() {
        square([size, arm_w], center = true);
        square([arm_w, size], center = true);
        rotate(45) square([size * 0.95, arm_w], center = true);
        rotate(-45) square([size * 0.95, arm_w], center = true);
    }
}

module side_markers_2d() {
    for (xv = [-markers_x, markers_x]) {
        translate([xv, markers_y]) side_marker_2d();
    }
}

module medical_cross_2d() {
    translate([0, front_cross_y])
        offset(r = 0.68)
            offset(delta = -0.68)
                union() {
                    square([9.0, 3.65], center = true);
                    square([3.65, 9.7], center = true);
                }
}

module front_waves_2d() {
    translate([0, front_waves_y])
        union() {
            rounded_arc_2d(1.6, 0.66, 40, 140);
            rounded_arc_2d(3.4, 0.74, 40, 140);
            rounded_arc_2d(5.1, 0.82, 40, 140);
        }
}

module front_art_2d() {
    union() {
        arc_text_top("SCAN ME", 9.4, 90, 2.42, 17.2, 108, 0.25);
        arc_text_bottom("MEDICAL INFO", 10.9, 270, 1.98, design_cy, 120, 0.13);
        front_waves_2d();
        medical_cross_2d();
        side_markers_2d();
    }
}

module phone_outline_2d() {
    outer_w = 8.2;
    outer_h = 14.2;
    outer_r = 1.20;
    wall = 0.82;

    union() {
        difference() {
            rounded_rect_2d(outer_w, outer_h, outer_r);
            rounded_rect_2d(outer_w - 2 * wall, outer_h - 2 * wall, outer_r - 0.8);
        }
        translate([0, 5.3])
            rounded_rect_2d(2.7, 0.8, 0.3);
    }
}

module phone_nfc_waves_2d() {
    translate([-1.2, 0.55])
        rotate(90)
            union() {
                rounded_arc_2d(1.30, 0.48, 214, 326, 6);
                rounded_arc_2d(2.20, 0.48, 214, 326, 6);
                rounded_arc_2d(3.10, 0.54, 214, 326, 6);
            }
}

module phone_nfc_label_2d() {
    translate([0, -3.5])
        thick_text("NFC", 1.50, 0.05);
}

module phone_details_2d() {
    translate([0, back_phone_y])
        union() {
            phone_outline_2d();
            phone_nfc_waves_2d();
            phone_nfc_label_2d();
        }
}

module back_art_raw_2d() {
    union() {
        arc_text_top("TAP PHONE", 9.6, 90, 2.28, 17.0, 110, 0.26);
        arc_text_bottom("FOR PET INFO", 10.7, 270, 2.02, design_cy, 118, 0.14);
        phone_details_2d();
        side_markers_2d();
    }
}

module back_art_2d() {
    mirror([1, 0, 0]) back_art_raw_2d();
}

module keychain_model() {
    union() {
        difference() {
            body_3d();
            ring_hole();
            nfc_cavity();
        }

        emboss_top()
            front_art_2d();

        emboss_bottom()
            back_art_2d();
    }
}

if (show_model) keychain_model();
if (show_front_preview) front_art_2d();
if (show_back_preview) back_art_raw_2d();
