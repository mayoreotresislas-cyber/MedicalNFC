// ============================================
// Huella original escalada
// Almohadilla aprox. 45 x 35.7 mm
// Grosor 4 mm
// NFC centrado en la almohadilla
// Relieve frontal y trasero dentro de la almohadilla
// ============================================

pad_w = 45;
thickness = 4.0;

nfc_tag_d = 25.0;
nfc_clearance = 0.5;
nfc_d = nfc_tag_d + nfc_clearance;
nfc_t = 1.0;
bottom_solid = 2.0;

relief_h = 0.62;
join_eps = 0.04;

$fn = 180;
font_name = "Segoe UI:style=Bold";
text_bold = 0.09;

hole_d = 5.0;          // diámetro del agujero final en mm
hole_x_raw = 415;      // posición en el dedo superior derecho
hole_y_raw = 110;

// --- parámetros del arte original ---
art_body_w = 35;
art_body_h = 45;

design_cy = 17.2;
front_cross_y = 13.9;
front_waves_y = 19.8;
back_phone_y = 16.8;
markers_x = 13.0;
markers_y = design_cy - 0.1;

// ---------- límites originales de la almohadilla ----------
body_min_x = 90;
body_max_x = 517;
body_min_y = 218;
body_max_y = 557;

body_w_raw = body_max_x - body_min_x;   // 427
body_h_raw = body_max_y - body_min_y;   // 339

// Escala uniforme para NO deformar la huella
escala = pad_w / body_w_raw;

// Centro real de la almohadilla original
body_cx_raw = (body_min_x + body_max_x) / 2;
body_cy_raw = (body_min_y + body_max_y) / 2;

// Medidas finales de la almohadilla
pad_h = body_h_raw * escala;

// Centro de la almohadilla ya transformada
pad_cx = escala * (body_cx_raw - 309);
pad_cy = escala * (557 - body_cy_raw);

// Escala uniforme del arte para que quepa dentro de la almohadilla
art_inset = -1.5;   // margen interno para que no toque bordes
safe_w = pad_w - 2 * art_inset;
safe_h = pad_h - 2 * art_inset;

art_scale = min(safe_w / art_body_w, safe_h / art_body_h);

art_offset_x = 0;
art_offset_y = 4.5;   // sube un poco el arte dentro de la almohadilla

// ---------- utilidades de texto ----------
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

// ---------- módulos base ----------
module blob(pts) {
    polygon(points = pts);
}

// Coloca un dedo moviéndolo y rotándolo sobre su propio centro
module dedo(pts, cx, cy, dx, dy, ang=0) {
    translate([dx, dy])
    translate([cx, cy])
    rotate(ang)
    translate([-cx, -cy])
    blob(pts);
}

// ---------- arte ----------
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
        arc_text_bottom("FOR PET INFO", 14.3, 270, 2.60, design_cy, 162, 0.20);
        phone_details_2d();
        side_markers_2d();
    }
}

module back_art_2d() {
    mirror([1, 0, 0]) back_art_raw_2d();
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

module agujero_llavero_2d() {
    scale([escala, -escala])
    translate([-309, -557])
    translate([hole_x_raw, hole_y_raw])
    circle(d = hole_d / escala);
}
// ---------- huella original ----------
module huella_raw() {
    union() {

        // Almohadilla grande inferior
        blob([
            [95,433],[90,476],[102,515],[129,544],[162,557],[202,555],
            [294,534],[332,537],[412,557],[443,557],[471,547],[495,528],
            [511,503],[517,479],[513,436],[487,387],[432,330],[364,238],
            [314,218],[279,220],[245,239],[170,335],[119,387]
        ]);

        // Dedo superior izquierdo
        dedo(
            [
                [186,2],[161,15],[142,41],[133,73],[135,116],[148,151],
                [169,178],[195,194],[220,197],[249,185],[268,162],[280,120],
                [278,85],[264,46],[239,16],[214,3]
            ],
            206, 100,
            13, 55,
            -13
        );

        // Dedo superior derecho
        dedo(
            [
                [428,0],[397,2],[371,17],[349,43],[332,85],[329,120],
                [338,159],[354,183],[382,199],[408,199],[437,185],[464,154],
                [478,121],[482,73],[474,41],[453,12]
            ],
            405, 100,
            -13, 55,
            13
        );

        // Dedo lateral izquierdo
        dedo(
            [
                [42,155],[21,170],[7,197],[4,227],[12,262],[30,292],
                [56,314],[80,322],[110,318],[131,301],[142,279],[145,240],
                [137,210],[121,183],[96,161],[73,152]
            ],
            75, 235,
            26, 55,
            -20
        );

        // Dedo lateral derecho
        dedo(
            [
                [573,154],[548,152],[520,162],[493,185],[476,213],[468,241],
                [469,274],[481,301],[498,316],[534,322],[562,312],[586,292],
                [606,260],[614,227],[611,195],[600,173]
            ],
            541, 237,
            -26, 65,
            20
        );
    }
}

module pad_only_raw() {
    blob([
        [95,433],[90,476],[102,515],[129,544],[162,557],[202,555],
        [294,534],[332,537],[412,557],[443,557],[471,547],[495,528],
        [511,503],[517,479],[513,436],[487,387],[432,330],[364,238],
        [314,218],[279,220],[245,239],[170,335],[119,387]
    ]);
}

module huella_2d() {
    scale([escala, -escala])
    translate([-309, -557])
    huella_raw();
}

module pad_only_2d() {
    scale([escala, -escala])
    translate([-309, -557])
    pad_only_raw();
}

module cavidad_nfc_2d() {
    translate([pad_cx, pad_cy])
        circle(d = nfc_d);
}

// ---------- arte dentro de la almohadilla ----------
module front_art_on_pad_2d() {
    intersection() {
        pad_only_2d();
        translate([pad_cx + art_offset_x, pad_cy + art_offset_y])
            scale([art_scale, art_scale])
            translate([0, -art_body_h / 2])
                front_art_2d();
    }
}

module back_art_on_pad_2d() {
    intersection() {
        pad_only_2d();
        translate([pad_cx + art_offset_x, pad_cy + art_offset_y])
            scale([art_scale, art_scale])
            translate([0, -art_body_h / 2])
                back_art_2d();
    }
}

// ---------- salida final ----------
union() {
    difference() {
        linear_extrude(height = thickness)
            huella_2d();

        // Agujero pasante para llavero
        translate([0, 0, -0.05])
            linear_extrude(height = thickness + 0.10)
                agujero_llavero_2d();

        // Cavidad NFC
        translate([0, 0, bottom_solid])
            linear_extrude(height = nfc_t + 0.05)
                cavidad_nfc_2d();
    }

    emboss_top()
        front_art_on_pad_2d();

    emboss_bottom()
        back_art_on_pad_2d();
}