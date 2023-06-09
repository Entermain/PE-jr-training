const urls = [
  "https://goaxil.com/collections/ear-buds/products/gs-electronic.js",
  "https://therollingstonesshop.com/products/americana-tongue-unisex-black-t-shirt.js",
  "https://offhours.co/collections/shop-all/products/affogato-1.js",
  "https://www.danskin.com/products/calming-slip-on-sneaker.js",
  "https://www.url.fail/expected-error.js",
];

let resultado = {};

async function fetchUrl(url) {
  try {
    let fUrl = await fetch(url);
    if (fUrl.ok) {
      let jsonUrl = await fUrl.json();
      console.log(jsonUrl);
      console.log(jsonUrl.variants);
      return jsonUrl;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

for (url of urls) {
  let jsonUrl = fetchUrl(url);
  let urlObj = [];
  if (jsonUrl) {
    let title = jsonUrl.title;
    let brand = jsonUrl.vendor;
    let images = jsonUrl.images;
    let groupId = jsonUrl.id;
    urlObj.push({ title }, { brand }, { images }, { groupId });
    let variants = jsonUrl.variants;
    let variantObj = {};
    for (let variant of variants) {
      let variantId = variant.id;
      let variantUrl = url.replace(/\.js/g, "?variant=${variantId}");
      let variantPrice = variant.price;
      variantObj["variantId"] = variantId;
      variantObj["variantUrl"] = variantUrl;
      variantObj["variantPrice"] = variantPrice;
    }
    urlObj.push(variantObj);
    resultado[url] = urlObj;
  } else {
    console.log("error");
  }
}
console.log(resultado);

// async function getUrls(url) {
//   let fetchUrl = await fetch(url);
//   if (fetchUrl.ok) {
//     let getJson = await fetchUrl.json();
//     //resultado[url.match(/.+\.com\//g)[0]] = {}

//     //console.log(getJson);
//   } else {
//     return "error";
//   }
// }

// console.log(resultado);
// getUrls("https://goaxil.com/collections/ear-buds/products/gs-electronic.js");
