/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

///////////////////////////////
/////////// GLOBALS ///////////
///////////////////////////////
//#region GLOBALS

var cardContainer = null;
const templateCard = null;

//#endregion

///////////////////////////////
///// CATALOG DATA / FXNS /////
///////////////////////////////
//#region CATALOG DATA / FXNS

// Function that abstracts away the
//     key names for struct creation.
function catalogInstance(title, url, bp0, bp1, bp2) {
    return {
        title,
        url,
        bullet_0: bp0,
        bullet_1: bp1,
        bullet_2: bp2,
    };
}

// Catalog data format:
//    {
//        CATEGORY_0: {mask: bool, instances: [ CARD00, CARD01, ... ]}
//        CATEGORY_1: {mask: bool, instances: [ CARD10, CARD11, ... ]}
//        CATEGORY_2: {mask: bool, instances: [ CARD20, CARD21, ... ]}
//    }
var catalogData = {
    "Programming Languages": {
        mask: true,
        instances: [
            catalogInstance(
                "C++",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
                "Perhaps my favorite language",
                "Strongly typed",
                "Highly feature-rich"
            ),
            catalogInstance(
                "C#",
                "https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg",
                "The first real language I learned",
                "Strongly typed",
                "Very easy to use"
            ),
            catalogInstance(
                "Python",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
                "Useful for data science",
                "Duck typed",
                "Very feature-rich language"
            ),
        ],
    },
    Animals: {
        mask: true,
        instances: [
            catalogInstance(
                "Cats",
                "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg",
                "Friendly purring pets",
                "Like listening to piano",
                "Comforting animals"
            ),
            catalogInstance(
                "Dogs",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/290px-Labrador_Retriever_portrait.jpg",
                "Very energetic pets",
                "Like to go on walks"
            ),
        ],
    },
    Instruments: {
        mask: true,
        instances: [
            catalogInstance(
                "Piano",
                "https://www.yamaha.com/us/pianos/images/homepageStill.jpg",
                "I play this instrument",
                "I really like classical music",
                "I also like cinematic music"
            ),
            catalogInstance(
                "Violin",
                "https://www.stringworks.com/cdn/shop/products/virtvntop2020_800x.jpg?v=1584031223",
                "I really like how it sounds",
                "I've attended classical concerts"
            ),
            catalogInstance(
                "Acoutstic Guitar",
                "https://www.martinguitar.com/dw/image/v2/BGJT_PRD/on/demandware.static/-/Sites-martin-master-catalog/default/dwfa364cc0/images/SC-13E-Special-Burst/SC-13E-Special-Burst_f.jpg?sw=600&sh=600&sm=fit",
                "I love cinematic music (acoustic)"
            ),
        ],
    },
    Activities: {
        mask: true,
        instances: [
            catalogInstance(
                "Writing Music",
                "https://blog.native-instruments.com/wp-content/uploads/dynamic/2023/02/pillar-page-how-to-make-electronic-music-2-1200x0-c-default.jpg",
                "I write music, EDM/Classical",
                "Produce music on computer"
            ),
            catalogInstance(
                "Playing Piano",
                "https://www.shutterstock.com/image-photo/isolated-hands-playing-on-piano-260nw-1985649401.jpg",
                "I love to play piano",
                "I create original music on piano"
            ),
            catalogInstance(
                "Programming",
                "https://media.istockphoto.com/id/1386341272/photo/abstract-modern-tech-of-programming-code-screen-developer.jpg?s=612x612&w=0&k=20&c=16FJUoZ6j-XmBDF0g-llzkJaIsdpf6uz46D4eQfL_LM=",
                "I work on AI/ML projects",
                "I've programmed cryptography projects"
            ),
            catalogInstance(
                "Working on Math",
                "https://static.scientificamerican.com/sciam/cache/file/060DE11D-D6B0-46B0-836CF8893C964FDD_source.jpg?w=600",
                "I love to ask fundamental questions",
                "Math is prerequisite to CS implementation"
            ),
            catalogInstance(
                "Hanging with Friends",
                "https://i.pinimg.com/originals/61/1f/a5/611fa599504c60174705728aee0a7df6.jpg",
                "Work/life balance is vital",
                "I love getting to talk to people"
            ),
        ],
    },
    "TV Shows": {
        mask: true,
        instances: [
            catalogInstance(
                "The Flash",
                "https://emorywheel.com/wp-content/uploads/2016/10/ac1fafb4cef5bb6bf83b03a08c3d20d3.jpg",
                "Has a great plot twist"
            ),
            catalogInstance(
                "Squid Game",
                "https://www.americamagazine.org/sites/default/files/main_image/2021/10/28/squid-game.png.png",
                "Very interesting plot"
            ),
        ],
    },
    Books: {
        mask: true,
        instances: [
            catalogInstance(
                "Godel, Escher, Bach",
                "https://target.scene7.com/is/image/Target/GUEST_929d887c-5ccc-453b-b616-b04bd7250344?wid=488&hei=488&fmt=pjpeg",
                "Connections between recursion, music, paradoxes",
                "Fascinating mathematical ideas"
            ),
        ],
    },
};

function applyFilter(category, enable) {
    catalogData[category].mask = enable;
}

//#endregion

///////////////////////////////
////////// FUNCTIONS //////////
///////////////////////////////
//#region FUNCTIONS

function windowLoaded() {
    initGlobals();
    refreshCards();
    showFilterList();
}

function initGlobals() {
    this.cardContainer = document.getElementById("card-container");
    this.templateCard = document.querySelector(".card");
}

// This function adds cards the page to display the data in the array
function refreshCards() {
    clearCards();
    showCards();
}

function clearCards() {
    this.cardContainer.innerHTML = "";
}

function showCards() {
    for (const [_, categoryData] of Object.entries(this.catalogData)) {
        // This here is the application of the filter
        //     when rendering.
        if (!categoryData.mask) continue;
        showCardsFromCategory(categoryData);
    }
}

function showCardsFromCategory(category) {
    for (const instance of category.instances) {
        this.cardContainer.appendChild(createCard(instance)); // Add new card to the container
    }
}

function createCard(instance) {
    const card = this.templateCard.cloneNode(true);

    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = instance.title;

    const cardImage = card.querySelector("img");
    cardImage.src = instance.url;
    cardImage.alt = instance.title + " Poster";

    const cardBPs = card.querySelector("ul");
    cardBPs.innerHTML = "";

    // Tiny helper for adding bullet point
    //     to unordered list.
    function addBulletPoint(text) {
        if (text == undefined || text == null) return;
        const bp = document.createElement("li");
        bp.appendChild(document.createTextNode(text));
        cardBPs.appendChild(bp);
    }

    addBulletPoint(instance.bullet_0);
    addBulletPoint(instance.bullet_1);
    addBulletPoint(instance.bullet_2);

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", instance.title, "- html: ", card);

    return card;
}

function showFilterList() {
    // This variable need not be global,
    //     since this fxn is only called once.
    const filterList = document.getElementById("filter-list");

    for (const [categoryName, _] of Object.entries(this.catalogData)) {
        filterList.appendChild(createFilterListItem(categoryName));
    }
}

function createFilterListItem(categoryName) {
    const filterTemplate = document.querySelector(".filter-li");

    const filter = filterTemplate.cloneNode(true);

    filter.style.display = "block";

    // Edit checkbox
    const checkBox = filter.querySelector("input");
    checkBox.addEventListener(
        "click",
        createFilterClickedEventHandler(categoryName, checkBox)
    );

    // Edit label
    const label = filter.querySelector("label");
    label.textContent = categoryName;

    return filter;
}

function createFilterClickedEventHandler(categoryName, checkBox) {
    return () => {
        this.catalogData[categoryName].mask = checkBox.checked;
        refreshCards();
    };
}

//#endregion

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", windowLoaded);

function quoteAlert() {
    console.log("Button Clicked!");
    alert(
        "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
    );
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
