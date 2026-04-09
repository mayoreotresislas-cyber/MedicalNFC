$fn = 180;

show_model = true;
show_front_preview = false;
show_back_preview = false;

font_name = "Segoe UI:style=Bold";

body_w = 35;
body_h = 45;
head_d = 13;
thickness = 4.0;

nfc_tag_d = 25.0;
nfc_clearance = 0.5;
nfc_d = nfc_tag_d + nfc_clearance;
nfc_t = 1.0;
bottom_solid = 2.2;

hole_d = 5.0;
hole_y = 38.1;

relief_h = 0.62;
join_eps = 0.04;
text_bold = 0.09;

design_cy = 17.2;
front_cross_y = 13.9;
front_waves_y = 19.8;
back_phone_y = 16.8;
markers_x = 13.0;
markers_y = design_cy - 0.1;

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

module teardrop_2d() {
    hull() {
        translate([0, body_w / 2]) circle(d = body_w);
        translate([0, body_h - head_d / 2]) circle(d = head_d);
    }
}

module body_3d() {
    linear_extrude(height = thickness)
        teardrop_2d();
}

module ring_hole() {
    translate([0, hole_y, -0.1])
        cylinder(d = hole_d, h = thickness + 0.2);
}

module nfc_cavity() {
    translate([0, design_cy, bottom_solid])
        cylinder(d = nfc_d, h = nfc_t + 0.01);
}

module side_marker_2d(size = 1.9, arm_w = 0.42) {
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
        offset(r = 0.72)
            offset(delta = -0.72)
                union() {
                    square([10.8, 4.25], center = true);
                    square([4.25, 11.6], center = true);
                }
}

module front_waves_2d() {
    translate([0, front_waves_y])
        union() {
            rounded_arc_2d(2.0, 0.74, 40, 140);
            rounded_arc_2d(4.2, 0.82, 40, 140);
            rounded_arc_2d(6.4, 0.92, 40, 140);
        }
}

module front_art_2d() {
    union() {
        arc_text_top("SCAN ME", 12.6, 90, 3.45, design_cy, 112, 0.27);
        arc_text_bottom("MEDICAL INFO", 14.4, 270, 2.95, design_cy, 154, 0.20);
        front_waves_2d();
        medical_cross_2d();
        side_markers_2d();
    }
}

module phone_outline_2d() {
    outer_w = 10.7;
    outer_h = 18.2;
    outer_r = 1.55;
    wall = 1.0;

    union() {
        difference() {
            rounded_rect_2d(outer_w, outer_h, outer_r);
            rounded_rect_2d(outer_w - 2 * wall, outer_h - 2 * wall, outer_r - 0.8);
        }
        translate([0, 6.7])
            rounded_rect_2d(3.4, 0.9, 0.35);
    }
}

module phone_nfc_waves_2d() {
    // Shifted left so the three waves read more centered inside the phone.
    translate([-1.9, 0.9])
        rotate(90)
            union() {
                rounded_arc_2d(1.8, 0.60, 214, 326, 6);
                rounded_arc_2d(3.0, 0.60, 214, 326, 6);
                rounded_arc_2d(4.2, 0.66, 214, 326, 6);
            }
}

module phone_nfc_label_2d() {
    translate([0, -4.7])
        thick_text("NFC", 2.1, 0.05);
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
        arc_text_top("TAP PHONE", 12.6, 90, 3.20, design_cy, 128, 0.28);
        arc_text_bottom("FOR MEDICAL INFO", 14.3, 270, 2.60, design_cy, 162, 0.20);
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
