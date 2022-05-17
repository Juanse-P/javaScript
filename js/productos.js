//Se arma el array con los objetos de los productos
const productos = [
    { id: 1, nombre: `Teclado Logitech G915 TKL`, precio: 820000, imagen: `./multimedia/teclados/Teclado_Logitech-G915-TKL_lightspeed_RGB.webp` },
    { id: 2, nombre: `Teclado Logitech K400`, precio: 129000, imagen: `./multimedia/teclados/Taclado_inalambrico_Logitech_K400-plus_español.webp` },
    { id: 3, nombre: `Kumara OUTEMO`, precio: 170000, imagen: `./multimedia/teclados/Teclado_gamer_Kumara-QWERTY-OUTEMU_español.webp` },
    { id: 4, nombre: `Mouse Logitech G502`, precio: 215000, imagen: `./multimedia/mouse/Mouse_De_Juego_Logitech-G-Series-G502_Negro.webp` },
    { id: 5, nombre: `Mouse Razer Viper mini`, precio: 140000, imagen: `./multimedia/mouse/Mouse_De_Juego_Razer-Viper-MiniNegro.webp` },
    { id: 6, nombre: `Redragon Griffin M607`, precio: 70000, imagen: `./multimedia/mouse/Mouse_De_Juego_Redragon_Griffin-M607-NG.webp` },
    { id: 7, nombre: `KlipXtreme mousepad LP82`, precio: 80000, imagen: `./multimedia/mousepad/Mousepad_Ergonomico_Con_Gel_Klipxtreme_KMP-100b_NG.webp` },
    { id: 8, nombre: `mousepad Aoas S4000`, precio: 50000, imagen: `./multimedia/mousepad/Mousepad_Gamer_Aoas-S4000De_Caucho_YPoliuretano_XL_30cmx80cmx0.4cm_NG.webp` },
    { id: 9, nombre: `mousepad Genius G WMP 200M`, precio: 50000, imagen: `./multimedia/mousepad/Mousepad_Gamer_Genius-G-WMP-200M-GX_Gaming_De_Goma_M_160mmx900mmx3cm_NG.webp` },
    { id: 10, nombre: `Monitor Samsung C27R500FHL-LED`, precio: 950000, imagen: `./multimedia/monitor/Monitor_Gamer_Curvo__Samsung-C27R500FHL-Led-27-Dark_Blue_Gray_100V240V.webp` },
    { id: 11, nombre: `Monitor Azus curvo de 23.6"`, precio: 10299000, imagen: `./multimedia/monitor/Monitor_Gamer_Curvo_Asus-TUF-Gaming-VG24VQ-Led_23.6_Negro.webp` },
    { id: 12, nombre: `Monitor LG curvo de 34"`, precio: 2500000, imagen: `./multimedia/monitor/Monitor_Gamer_Curvo_LG_UltraGear-34GL750_Led_34_Negro_Y_Rojo.webp` },
    { id: 13, nombre: `Mando de PS4 blanco`, precio: 100000, imagen: `./multimedia/Mandos/Mando_Inalambrico_Bluetooth_Gamepad_Blanco.webp` },
    { id: 14, nombre: `Mando PS5 DualSense`, precio: 350000, imagen: `./multimedia/Mandos/Control_Joystick_Inalambrico_Sony_PlayStation_DualSende_5_CFI-ZCT1_Cosmic_Red.webp` },
    { id: 15, nombre: `Back buttom para PS4`, precio: 150000, imagen: `./multimedia/Mandos/Boton_Trasero_Back_Button_Ps4.webp` },
    { id: 16, nombre: `Microfono Technia 20 AT2020`, precio: 380000, imagen: `./multimedia/microfono/Microfono_Audio-Technica-20-AT2020_Condensador_cardioide_Negro.webp` },
    { id: 17, nombre: `Microfono Blue Yetti`, precio: 450000, imagen: `./multimedia/microfono/Microfono_Blue_Yeti_Condensador_Multipatron_Blackout.webp` },
    { id: 18, nombre: `Microfono Boya BY-M1`, precio: 45000, imagen: `./multimedia/microfono/Microfono_Boya_BY-M1_Condensador_Omnidireccional_Negro.webp` },
    { id: 19, nombre: `Audifonos Corsair inalambricos Void Elite`, precio: 380000, imagen: `./multimedia/audifonos/Audifonos_Gamer_Inalambricos_Corsair_VOID_elite_Wireless_Blanco_Con_Luz_RGB_Led.webp` },
    { id: 20, nombre: `Audifonos Logitech series G733`, precio: 630000, imagen: `./multimedia/audifonos/Audifonos_Gamer_Inalambricos_Logitech-G-Series-G733-Kda_Con_Luz_RGB_Led.webp` },
    { id: 21, nombre: `Audifonos Logitech G935`, precio: 800000, imagen: `./multimedia/audifonos/Audifonos_Gamer_Inalambricos_Logitech-G-Series-G935_Negro_Y_Azul_Con_Luz_RGB_Led.webp` },
    { id: 22, nombre: `Camara para PC con microfono`, precio: 90000, imagen: `./multimedia/camara/Camara_Web-1080_Para_Pc_Laptop_USB_Cam_Com_Microfono.webp` },
    { id: 23, nombre: `Camara Redragon GW800 1080p`, precio: 200000, imagen: `./multimedia/camara/Camara_Web_Redragon-GW800_Hitman_Webcam_Para_Streaming_1080p.webp` },
    { id: 24, nombre: `Camara Logitech C9205 Full HD`, precio: 360000, imagen: `./multimedia/camara/Logitech-C920S_Pro_Webcam_HD_Videochats_En_FULL_HD_1080.webp` }
];