// Replace 'YourString' with the text you want to search for and style
const searchStrings = ['Shobhit Chugh', 'Sam Feldman'];

function highlightText(element) {
    if(element){
        element.style.color = '#6554C0';
        element.style.fontWeight = '800';
        element.style.fontSize = '16px';
    }
}

function processTextElements(elements) {
  elements.forEach((element) => {
    searchStrings.forEach((searchString) => {
        if (element.textContent.includes(searchString)) {
        highlightText(element);
    }    
    });
    
  });
}

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      // New content has been added to the DOM, process it
      const newElements = Array.from(mutation.addedNodes);
      processTextElements(newElements);
    }
  });
});

// Start observing changes in the document body
observer.observe(document.body, { childList: true, subtree: true });

// Initial processing of existing content
const initialTextElements = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');
processTextElements(initialTextElements);
