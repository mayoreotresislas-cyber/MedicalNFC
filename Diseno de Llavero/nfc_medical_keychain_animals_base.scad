$fn = 180;

show_model = is_undef(user_show_model) ? true : user_show_model;
show_front_preview = is_undef(user_show_front_preview) ? false : user_show_front_preview;
show_back_preview = is_undef(user_show_back_preview) ? false : user_show_back_preview;
body_shape = is_undef(user_body_shape) ? "cat_paw" : user_body_shape;
function is_paw_shape() = body_shape == "cat_paw" || body_shape == "dog_paw";

font_name = "Segoe UI:style=Bold";

body_w = 35;
body_h = 45;
thickness = 4.0;
corner_r = 1.4;

nfc_tag_d = 25.0;
nfc_clearance = 0.5;
nfc_d = nfc_tag_d + nfc_clearance;
nfc_t = 1.0;
bottom_solid = 2.2;

hole_d = 5.0;
hole_y = is_paw_shape() ? 36.8 : 38.5;

relief_h = 0.62;
join_eps = 0.04;
text_bold = 0.085;

design_cy = is_paw_shape() ? 14.8 : 20.5;
front_cross_y = is_paw_shape() ? 12.4 : 17.5;
front_waves_y = is_paw_shape() ? 17.8 : 23.5;
back_phone_y = is_paw_shape() ? 14.9 : 20.3;
markers_x = is_paw_shape() ? 8.9 : 10.8;
markers_y = is_paw_shape() ? 14.8 : 20.5;

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

module cat_paw_2d() {
    offset(r = 1.0)
        offset(delta = -1.0)
            union() {
                translate([0, 13.4]) scale([1.22, 1.04]) circle(r = 13.2);
                translate([-12.9, 24.8]) scale([0.84, 1.18]) circle(r = 5.2);
                translate([-4.8, 34.9]) scale([0.86, 1.34]) circle(r = 5.0);
                translate([4.8, 34.9]) scale([0.86, 1.34]) circle(r = 5.0);
                translate([12.9, 24.8]) scale([0.84, 1.18]) circle(r = 5.2);
                hull() {
                    translate([-9.4, 26.9]) circle(r = 4.1);
                    translate([-4.9, 31.4]) circle(r = 3.6);
                }
                hull() {
                    translate([9.4, 26.9]) circle(r = 4.1);
                    translate([4.9, 31.4]) circle(r = 3.6);
                }
                hull() {
                    translate([-5.0, 30.8]) circle(r = 3.1);
                    translate([5.0, 30.8]) circle(r = 3.1);
                    translate([0, 27.9]) circle(r = 5.2);
                }
                hull() {
                    translate([-2.3, 30.2]) circle(r = 2.7);
                    translate([2.3, 30.2]) circle(r = 2.7);
                    translate([0, 37.1]) circle(r = 4.1);
                }
            }
}

module dog_paw_2d() {
    offset(r = 1.0)
        offset(delta = -1.0)
            union() {
                translate([0, 13.2]) scale([1.30, 1.05]) circle(r = 13.4);
                translate([-13.3, 24.9]) scale([0.92, 1.24]) circle(r = 5.4);
                translate([-5.1, 34.7]) scale([0.92, 1.46]) circle(r = 5.0);
                translate([5.1, 34.7]) scale([0.92, 1.46]) circle(r = 5.0);
                translate([13.3, 24.9]) scale([0.92, 1.24]) circle(r = 5.4);
                hull() {
                    translate([-9.8, 27.3]) circle(r = 4.4);
                    translate([-5.2, 31.2]) circle(r = 3.9);
                }
                hull() {
                    translate([9.8, 27.3]) circle(r = 4.4);
                    translate([5.2, 31.2]) circle(r = 3.9);
                }
                hull() {
                    translate([-5.4, 30.6]) circle(r = 3.3);
                    translate([5.4, 30.6]) circle(r = 3.3);
                    translate([0, 27.8]) circle(r = 5.5);
                }
                hull() {
                    translate([-2.7, 29.9]) circle(r = 2.9);
                    translate([2.7, 29.9]) circle(r = 2.9);
                    translate([0, 37.0]) circle(r = 4.2);
                }
            }
}

module cat_head_2d() {
    offset(r = 1.0)
        offset(delta = -1.0)
            union() {
                translate([0, 17.2]) scale([1.08, 1.00]) circle(r = 16.8);
                polygon(points = [[-12.6, 29.0], [-9.1, 44.4], [-1.9, 33.2]]);
                polygon(points = [[12.6, 29.0], [9.1, 44.4], [1.9, 33.2]]);
                hull() {
                    translate([-1.9, 35.2]) circle(r = 2.5);
                    translate([1.9, 35.2]) circle(r = 2.5);
                    translate([0, 40.5]) circle(r = 4.5);
                }
            }
}

module dog_head_2d() {
    offset(r = 1.0)
        offset(delta = -1.0)
            union() {
                translate([0, 17.4]) scale([1.10, 1.00]) circle(r = 16.2);
                hull() {
                    translate([-13.5, 29.2]) circle(r = 4.8);
                    translate([-16.9, 23.0]) circle(r = 5.3);
                    translate([-10.4, 21.9]) circle(r = 4.4);
                }
                hull() {
                    translate([13.5, 29.2]) circle(r = 4.8);
                    translate([16.9, 23.0]) circle(r = 5.3);
                    translate([10.4, 21.9]) circle(r = 4.4);
                }
                hull() {
                    translate([-2.2, 35.0]) circle(r = 2.7);
                    translate([2.2, 35.0]) circle(r = 2.7);
                    translate([0, 40.6]) circle(r = 4.4);
                }
            }
}

module body_outline_2d() {
    if (body_shape == "dog_paw") {
        dog_paw_2d();
    } else if (body_shape == "cat_head") {
        cat_head_2d();
    } else if (body_shape == "dog_head") {
        dog_head_2d();
    } else {
        cat_paw_2d();
    }
}

module body_3d() {
    linear_extrude(height = thickness)
        body_outline_2d();
}

module ring_hole() {
    translate([0, hole_y, -0.1])
        cylinder(d = hole_d, h = thickness + 0.2);
}

module nfc_cavity() {
    translate([0, design_cy, bottom_solid])
        cylinder(d = nfc_d, h = nfc_t + 0.01);
}

module side_marker_2d(size = 1.7, arm_w = 0.38) {
    union() {
        square([size, arm_w], center = true);
        square([arm_w, size], center = true);
        rotate(45) square([size * 0.95, arm_w], center = true);
        rotate(-45) square([size * 0.95, arm_w], center = true);
    }
}

module side_markers_2d() {
    for (xv = [-markers_x, markers_x]) {
        translate([xv, markers_y]) scale(is_paw_shape() ? [0.82, 0.82] : [1, 1]) side_marker_2d();
    }
}

module medical_cross_2d() {
    translate([0, front_cross_y])
        scale(is_paw_shape() ? [0.86, 0.86] : [1, 1])
            offset(r = 0.68)
                offset(delta = -0.68)
                    union() {
                        square([9.8, 3.95], center = true);
                        square([3.95, 10.7], center = true);
                    }
}

module front_waves_2d() {
    translate([0, front_waves_y])
        scale(is_paw_shape() ? [0.84, 0.84] : [1, 1])
            union() {
                rounded_arc_2d(1.8, 0.70, 40, 140);
                rounded_arc_2d(3.8, 0.78, 40, 140);
                rounded_arc_2d(5.7, 0.86, 40, 140);
            }
}

module front_art_2d() {
    union() {
        arc_text_top(
            "SCAN ME",
            is_paw_shape() ? 8.5 : 10.7,
            90,
            is_paw_shape() ? 2.30 : 2.85,
            design_cy,
            is_paw_shape() ? 88 : 90,
            is_paw_shape() ? 0.18 : 0.24
        );
        arc_text_bottom(
            "MEDICAL INFO",
            is_paw_shape() ? 9.9 : 12.5,
            270,
            is_paw_shape() ? 1.92 : 2.35,
            design_cy,
            is_paw_shape() ? 112 : 124,
            is_paw_shape() ? 0.13 : 0.17
        );
        front_waves_2d();
        medical_cross_2d();
        side_markers_2d();
    }
}

module phone_outline_2d() {
    outer_w = is_paw_shape() ? 7.9 : 9.6;
    outer_h = is_paw_shape() ? 13.8 : 16.6;
    outer_r = is_paw_shape() ? 1.15 : 1.45;
    wall = is_paw_shape() ? 0.82 : 0.95;

    union() {
        difference() {
            rounded_rect_2d(outer_w, outer_h, outer_r);
            rounded_rect_2d(outer_w - 2 * wall, outer_h - 2 * wall, outer_r - 0.8);
        }
        translate([0, is_paw_shape() ? 5.0 : 6.1])
            rounded_rect_2d(is_paw_shape() ? 2.6 : 3.1, 0.8, 0.3);
    }
}

module phone_nfc_waves_2d() {
    translate([is_paw_shape() ? -1.2 : -1.5, is_paw_shape() ? 0.65 : 0.75])
        rotate(90)
            union() {
                rounded_arc_2d(is_paw_shape() ? 1.30 : 1.55, is_paw_shape() ? 0.46 : 0.54, 214, 326, 6);
                rounded_arc_2d(is_paw_shape() ? 2.20 : 2.65, is_paw_shape() ? 0.46 : 0.54, 214, 326, 6);
                rounded_arc_2d(is_paw_shape() ? 3.10 : 3.75, is_paw_shape() ? 0.52 : 0.60, 214, 326, 6);
            }
}

module phone_nfc_label_2d() {
    translate([0, is_paw_shape() ? -3.3 : -4.2])
        thick_text("NFC", is_paw_shape() ? 1.45 : 1.8, 0.05);
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
        arc_text_top(
            "TAP PHONE",
            is_paw_shape() ? 8.8 : 10.8,
            90,
            is_paw_shape() ? 2.18 : 2.65,
            design_cy,
            is_paw_shape() ? 92 : 98,
            is_paw_shape() ? 0.18 : 0.24
        );
        arc_text_bottom(
            "FOR MEDICAL INFO",
            is_paw_shape() ? 10.1 : 12.6,
            270,
            is_paw_shape() ? 1.66 : 2.10,
            design_cy,
            is_paw_shape() ? 118 : 132,
            is_paw_shape() ? 0.12 : 0.17
        );
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
