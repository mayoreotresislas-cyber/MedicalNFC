user_body_shape = "cat_paw";
user_show_model = false;
user_show_front_preview = false;
user_show_back_preview = false;
include <nfc_medical_keychain_animals_base.scad>

color([0.92, 0.03, 0.03])
    difference() {
        body_outline_2d();
        translate([0, hole_y]) circle(d = hole_d);
    }

color("white")
    front_art_2d();
