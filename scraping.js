const puppeteer = require("puppeteer");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

exports.scrapePruduct = async (url, kategori, filname, ID) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const flower = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".category-item"), card => {
      const title = card.querySelector(".product-card-name").textContent.trim();
      const url = card.querySelector("a.product-link").href;
      const price = card.querySelector("span.current").textContent.trim();

      const image_element = card.querySelector(".product-card-image img");
      const image = image_element.dataset.src
        ? `https:${image_element.dataset.src}`
        : image_element.src;

      return {
        title,
        url,
        price,
        image,
      };
    });
  });

  await browser.close();

  const csvWriter = createCsvWriter({
    path: `data/${filname}`,
    header: [
      { id: "ID", title: "ID" },
      { id: "Typ", title: "Typ" },
      { id: "Artikelnr", title: "Artikelnr" },
      { id: "Namn", title: "Namn" },
      { id: "Ärutvald", title: "Är utvald?" },
      { id: "Publicerad", title: "Publicerad" },

      { id: "Kortbeskrivning", title: "Kort beskrivning" },
      { id: "Beskrivning", title: "Beskrivning" },
      { id: "Datumnärreaprisetbörjar", title: "Datum när reapriset börjar" },
      { id: "Datumnärreaprisetupphör", title: "Datum när reapriset upphör" },
      { id: "Momsstatus", title: "Momsstatus" },
      { id: "Momsgrupp", title: "Momsgrupp" },
      { id: "Ilager", title: "I lager?" },
      { id: "Lagersaldo", title: "Lagersaldo" },
      { id: "Lågtlagerantal", title: "Lågt lagerantal" },
      { id: "Tillåtrestnoteringar", title: "Tillåt restnoteringar?" },
      { id: "Säljesstyckvis", title: "Säljes styckvis?" },
      { id: "Vikt", title: "Vikt (kg)" },
      { id: "Längd", title: "Längd (cm)" },
      { id: "Bredd", title: "Bredd (cm)" },
      { id: "Höjd", title: "Höjd (cm)" },
      { id: "Tillåtkundrecensioner", title: "Tillåt kundrecensioner?" },
      { id: "Köpmeddelande", title: "Köpmeddelande" },
      { id: "Reapris", title: "Reapris" },
      { id: "Ordinariepris", title: "Ordinarie pris" },
      { id: "Kategorier", title: "Kategorier" },
      { id: "Taggar", title: "Taggar" },
      { id: "Fraktklass", title: "Fraktklass" },
      { id: "Bilder", title: "Bilder" },
      { id: "Nedladdningsgräns", title: "Nedladdningsgräns" },
      { id: "Laddanedutgångsdagar", title: "Ladda ned utgångsdagar" },
      { id: "Förälder", title: "Förälder" },
      { id: "Grupperadeprodukter", title: "Grupperade produkter" },
      { id: "Merförsäljning", title: "Merförsäljning" },
      { id: "Korsförsäljning", title: "Korsförsäljning" },
      { id: "ExternURL", title: "Extern URL" },
      { id: "Knapptext", title: "Knapptext" },
      { id: "Position", title: "Position" },
      { id: "Metathb_product_video", title: "Meta: thb_product_video" },
      { id: "Metasizing_guide", title: "Meta: sizing_guide" },
      { id: "Metars_page_bg_color", title: "Meta: rs_page_bg_color" },
      {
        id: "Metarank_math_internal_links_processed",
        title: "Metarank_math_internal_links_processed",
      },
      { id: "Metawpb_vc_js_status", title: "Meta: _wpb_vc_js_status" },
      { id: "Metarank_math_permalink", title: "Meta: rank_math_permalink" },
      {
        id: "Metarank_math_primary_product_cat",
        title: "Metarank_math_primary_product_cat",
      },
      { id: "Metarank_math_seo_score", title: "Meta: rank_math_seo_score" },
      {
        id: "Metarank_math_facebook_enable_image_overlay",
        title: "Metarank_math_facebook_enable_image_overlay",
      },
      {
        id: "Metarank_math_facebook_image_overlay",
        title: "Metarank_math_facebook_image_overlay",
      },
      {
        id: "Metarank_math_twitter_use_facebook",
        title: "Metarank_math_twitter_use_facebook",
      },
      {
        id: "Metarank_math_twitter_card_type",
        title: "Metarank_math_twitter_card_type",
      },
      {
        id: "Metarank_math_twitter_enable_image_overlay",
        title: "Metarank_math_twitter_enable_image_overlay",
      },
      {
        id: "Metarank_math_twitter_image_overlay",
        title: "Metarank_math_twitter_image_overlay",
      },
    ],
  });

  const records = flower.map((item, index) => {
    return {
      ID: index + ID,
      Typ: "external",
      Artikelnr: "",
      Namn: item.title,
      Publicerad: 1,
      Ärutvald: 0,

      Kortbeskrivning: "",
      Beskrivning: "",
      Datumnärreaprisetbörjar: "",
      Datumnärreaprisetupphör: "",
      Momsstatus: "taxable",
      Momsgrupp: "",
      Ilager: 1,
      Lagersaldo: "",
      Lågtlagerantal: "",
      Tillåtrestnoteringar: 0,
      Säljesstyckvis: 0,
      Vikt: "",
      Bredd: "",
      Höjd: "",
      Tillåtkundrecensioner: 1,
      Köpmeddelande: "",
      Reapris: "",
      Ordinariepris: item.price,
      Kategorier: kategori,
      Taggar: "",
      Fraktklass: "",
      Bilder: item.image,
      Nedladdningsgräns: "",
      Laddanedutgångsdagar: "",
      Förälder: "",
      Grupperadeprodukter: "",
      Merförsäljning: "",
      Korsförsäljning: "",
      ExternURL: item.url,
      Knapptext: "Skicka blommor nu",
      Position: 0,
      Metathb_product_video: "",
      Metasizing_guide: "off",
      Metars_page_bg_color: "",
      Metarank_math_internal_links_processed: 1,
      Metawpb_vc_js_status: "FALSE",
      Metarank_math_permalink: item.title,
      Metarank_math_primary_product_cat: 0,
      Metarank_math_seo_score: 8,
      Metarank_math_facebook_enable_image_overlay: "off",
      Metarank_math_facebook_image_overlay: "play",
      Metarank_math_twitter_use_facebook: "on",
      Metarank_math_twitter_card_type: "summary_large_image",
      Metarank_math_twitter_enable_image_overlay: "off",
      Metarank_math_twitter_image_overlay: "play",
    };
  });

  csvWriter.writeRecords(records).then(() => {
    console.log(`Scraping för ${kategori} klar!`);
  });
};
