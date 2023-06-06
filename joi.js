function countWords() {
    const textArea = document.getElementById("text-area");
    const wordCount = document.getElementById("word-count");
    
    const words = textArea.value.trim().split(" ");
    
    const filteredWords = words.filter(word => word !== "");

    wordCount.textContent = `Word count: ${filteredWords.length}/200`;
    
    if (filteredWords.length > 200) {
      textArea.value = textArea.value.substr(0, textArea.value.lastIndexOf(" ", textArea.maxLength));
      wordCount.style.color = "red"; 
      textArea.disabled = true;
    } else {
      wordCount.style.color = ""; 
      textArea.disabled = false;
    }
  }