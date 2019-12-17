class TranslatableBlock {
  translate(lang) {
    this.lang = lang;
    this.translatableElements.forEach((block) => {
      block.translate(lang);
    });
  }
}

export default TranslatableBlock;
