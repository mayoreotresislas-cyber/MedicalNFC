$fn = 180;

// ==========================================
// NFC MEDICAL KEYCHAIN
// Improved lettering for 3D printing
// ==========================================

variant = "printable";  // "printable" or "reference"

// ---------------- PARAMETERS ----------------
font_name = "Verdana:style=Bold";

body_w = 35;
body_h = 45;
head_d = 13;
thickness = 4.0;

// NFC insert
nfc_tag_d = 25.0;
nfc_clearance = 0.5;
nfc_d = nfc_tag_d + nfc_clearance;
nfc_t = 1.0;
bottom_solid = 2.2;
top_skin = thickness - bottom_solid - nfc_t;

// ring hole
hole_d = 5.0;
hole_y = 38.1;

// relief
relief_h = 0.62;
join_eps = 0.04;
text_grow = 0.16;   // thickens letters for cleaner slicing/printing
arc_scale = 0.78;   // mm-to-angle conversion tuning for manual kerning

// art layout
design_cy = body_w / 2;
front_cross_y = design_cy - 1.0;
front_waves_y = design_cy + 5.8;
back_phone_y = design_cy + 0.5;
dots_y = design_cy + 0.2;
dots_x = 13.1;

assert(top_skin > 0, "Invalid NFC stackup: top skin must remain positive.");

// ---------------- HELPERS ----------------
function char_units(ch) =
    ch == " " ? 0.55 :
    ch == "I" ? 0.40 :
    ch == "J" ? 0.52 :
    ch == "L" ? 0.68 :
    ch == "M" ? 1.12 :
    ch == "W" ? 1.18 :
    ch == "A" ? 0.86 :
    ch == "B" ? 0.84 :
    ch == "C" ? 0.86 :
    ch == "D" ? 0.88 :
    ch == "E" ? 0.78 :
    ch == "F" ? 0.74 :
    ch == "G" ? 0.90 :
    ch == "H" ? 0.90 :
    ch == "K" ? 0.84 :
    ch == "N" ? 0.92 :
    ch == "O" ? 0.92 :
    ch == "P" ? 0.82 :
    ch == "Q" ? 0.92 :
    ch == "R" ? 0.84 :
    ch == "S" ? 0.78 :
    ch == "T" ? 0.76 :
    ch == "U" ? 0.90 :
    ch == "V" ? 0.86 :
    ch == "X" ? 0.84 :
    ch == "Y" ? 0.84 :
    ch == "Z" ? 0.78 :
    0.82;

function list_sum(v, i = 0) = i >= len(v) ? 0 : v[i] + list_sum(v, i + 1);
function prefix_sum(v, n) = n <= 0 ? 0 : list_sum([for (i = [0:n - 1]) v[i]]);

module rounded_rect_2d(w, h, r) {
    offset(r = r)
        square([w - 2 * r, h - 2 * r], center = true);
}

module rounded_arc_2d(radius, stroke, a0, a1, step = 5) {
    for (a = [a0:step:a1 - step]) {
        a_next = min(a + step, a1);
        hull() {
            translate([radius * cos(a), radius * sin(a)])
                circle(d = stroke);
            translate([radius * cos(a_next), radius * sin(a_next)])
                circle(d = stroke);
        }
    }
}

module thick_char_2d(ch, size) {
    offset(delta = text_grow)
        text(ch, size = size, font = font_name, halign = "center", valign = "center");
}

module arc_text_top(str, radius, center_angle, size, cy, spread = 1.0) {
    widths = [for (i = [0:len(str) - 1]) char_units(str[i])];
    angle_per_unit = size * arc_scale / radius * 180 / PI * spread;
    total_angle = angle_per_unit * list_sum(widths);
    start = center_angle - total_angle / 2;

    for (i = [0:len(str) - 1]) {
        ang = start + angle_per_unit * (prefix_sum(widths, i) + widths[i] / 2);
        translate([0, cy, 0])
            rotate([0, 0, ang])
                translate([0, radius, 0])
                    rotate([0, 0, -90])
                        thick_char_2d(str[i], size);
    }
}

module arc_text_bottom(str, radius, center_angle, size, cy, spread = 1.0) {
    widths = [for (i = [0:len(str) - 1]) char_units(str[i])];
    angle_per_unit = size * arc_scale / radius * 180 / PI * spread;
    total_angle = angle_per_unit * list_sum(widths);
    start = center_angle + total_angle / 2;

    for (i = [0:len(str) - 1]) {
        ang = start - angle_per_unit * (prefix_sum(widths, i) + widths[i] / 2);
        translate([0, cy, 0])
            rotate([0, 0, ang])
                translate([0, radius, 0])
                    rotate([0, 0, 90])
                        thick_char_2d(str[i], size);
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

// ---------------- BODY ----------------
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

// ---------------- FRONT ----------------
module medical_cross_2d() {
    translate([0, front_cross_y])
        offset(r = 0.70)
            offset(delta = -0.70)
                union() {
                    square([10.8, 4.2], center = true);
                    square([4.2, 10.8], center = true);
                }
}

module front_waves_2d() {
    translate([0, front_waves_y])
        union() {
            rounded_arc_2d(5.1, 1.25, 210, 330);
            rounded_arc_2d(8.7, 1.25, 210, 330);
            rounded_arc_2d(12.2, 1.35, 210, 330);
        }
}

module front_dots_2d() {
    for (xv = [-dots_x, dots_x]) {
        translate([xv, dots_y])
            circle(d = 1.45);
    }
}

module front_art_2d() {
    union() {
        arc_text_top("SCAN ME", 12.0, 90, 4.9, design_cy, 1.04);
        arc_text_bottom("MEDICAL INFO", 13.6, 270, 4.15, design_cy, 0.95);
        front_waves_2d();
        medical_cross_2d();
        front_dots_2d();
    }
}

// ---------------- BACK ----------------
module phone_outline_2d() {
    outer_w = 11.2;
    outer_h = 18.6;
    outer_r = 1.75;
    wall = 1.05;

    union() {
        difference() {
            rounded_rect_2d(outer_w, outer_h, outer_r);
            rounded_rect_2d(outer_w - 2 * wall, outer_h - 2 * wall, outer_r - 0.85);
        }

        translate([0, 6.9])
            rounded_rect_2d(3.8, 1.0, 0.4);
    }
}

module phone_waves_2d() {
    translate([1.8, -1.6])
        rotate(-90)
            union() {
                rounded_arc_2d(2.0, 0.72, 210, 332, 6);
                rounded_arc_2d(3.5, 0.72, 210, 332, 6);
                rounded_arc_2d(5.0, 0.78, 210, 332, 6);
            }
}

module phone_icon_2d() {
    translate([0, back_phone_y])
        union() {
            phone_outline_2d();
            phone_waves_2d();
        }
}

module back_dots_2d() {
    for (xv = [-dots_x, dots_x]) {
        translate([xv, dots_y])
            circle(d = 1.45);
    }
}

module back_art_raw_2d() {
    union() {
        arc_text_top("TAP PHONE", 12.0, 90, 4.55, design_cy, 0.98);
        arc_text_bottom("FOR MEDICAL INFO", 13.9, 270, 3.55, design_cy, 0.83);
        phone_icon_2d();
        back_dots_2d();
    }
}

module back_art_2d() {
    mirror([1, 0, 0])
        back_art_raw_2d();
}

// ---------------- MODELS ----------------
module printable_model() {
    union() {
        difference() {
            body_3d();
            ring_hole();
            nfc_cavity();
        }

        emboss_top()
            front_art_2d();
    }
}

module reference_model() {
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

module keychain_model(selected_variant = "printable") {
    if (selected_variant == "reference") {
        reference_model();
    } else {
        printable_model();
    }
}

keychain_model(variant);
