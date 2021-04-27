const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const csvWriter = createCsvWriter({
  path: "file.csv",
  header: [
    { id: "ID", title: "ID" },
    { id: "Typ", title: "Typ" },
    { id: "Namn", title: "Namn" },
    { id: "Publicerad", title: "Publicerad" },
    { id: "Synlighet i katalog", title: "Synlighet i katalog" },
    { id: "Kort beskrivning", title: "Kort beskrivning" },
    { id: "Beskrivning", title: "Beskrivning" },
    { id: "Datum när reapriset börjar", title: "Datum när reapriset börjar" },
    { id: "Datum när reapriset upphör", title: "Datum när reapriset upphör" },
    { id: "Momsstatus", title: "Momsstatus" },
    { id: "Momsgrupp", title: "Momsgrupp" },
    { id: "I lager?", title: "I lager?" },
    { id: "Lagersaldo", title: "Lagersaldo" },
    { id: "Lågt lagerantal", title: "Lågt lagerantal" },
    { id: "Tillåt restnoteringar?", title: "Tillåt restnoteringar?" },
    { id: "Säljes styckvis?", title: "Säljes styckvis?" },
    { id: "Vikt (kg)", title: "Vikt (kg)" },
    { id: "Längd (cm)", title: "Längd (cm)" },
    { id: "Bredd (cm)", title: "Bredd (cm)" },
    { id: "Höjd (cm)", title: "Höjd (cm)" },
    { id: "Tillåt kundrecensioner?", title: "Tillåt kundrecensioner?" },
    { id: "Köpmeddelande", title: "Köpmeddelande" },
    { id: "Reapris", title: "Reapris" },
    { id: "Ordinarie pris", title: "Ordinarie pris" },
    { id: "Kategorier", title: "Kategorier" },
    { id: "Taggar", title: "Taggar" },
    { id: "Fraktklass", title: "Fraktklass" },
    { id: "Bilder", title: "Bilder" },
    { id: "Nedladdningsgräns", title: "Nedladdningsgräns" },
    { id: "Ladda ned utgångsdagar", title: "Ladda ned utgångsdagar" },
    { id: "Förälder", title: "Förälder" },
    { id: "Grupperade produkter", title: "Grupperade produkter" },
    { id: "Merförsäljning", title: "Merförsäljning" },
    { id: "Korsförsäljning", title: "Korsförsäljning" },
    { id: "Extern URL", title: "Extern URL" },
    { id: "Knapptext", title: "Knapptext" },
    { id: "Position", title: "Position" },
    { id: "Meta: thb_product_video", title: "Meta: thb_product_video" },
    { id: "Meta: sizing_guide", title: "Meta: sizing_guide" },
    { id: "Meta: rs_page_bg_color", title: "Meta: rs_page_bg_color" },
    { id: "Meta: rank_math_internal_links_processed", title: "Meta: rank_math_internal_links_processed },
    { id: "Meta: _wpb_vc_js_status", title: "Meta: _wpb_vc_js_status" },
    { id: "Meta: rank_math_permalink", title: "Meta: rank_math_permalink" },
    { id: "Meta: rank_math_primary_product_cat", title: "Meta: rank_math_primary_product_cat" },
    { id: "Meta: rank_math_seo_score", title: "Meta: rank_math_seo_score" },
    { id: "Meta: rank_math_facebook_enable_image_overlay", title: "Meta: rank_math_facebook_enable_image_overlay" },
    { id: "Meta: rank_math_facebook_image_overlay", title: "Meta: rank_math_facebook_image_overlay" },
    { id: "Meta: rank_math_twitter_use_facebook", title: "Meta: rank_math_twitter_use_facebook" },
    { id: "Meta: rank_math_twitter_card_type", title: "Meta: rank_math_twitter_card_type" },
    { id: "Meta: rank_math_twitter_enable_image_overlay", title: "Meta: rank_math_twitter_enable_image_overlay" },
    { id: "Meta: rank_math_twitter_image_overlay", title: "Meta: rank_math_twitter_image_overlay" },
    { id: "Position", title: "Position" },
    { id: "Position", title: "Position" },
    { id: "Position", title: "Position" },
    { id: "Position", title: "Position" },
    
  ],
});

const records = [{ ID: 100, Typ: "external", Artikelnr: "" }];

csvWriter
  .writeRecords(records) // returns a promise
  .then(() => {
    console.log("...Done");
  });
