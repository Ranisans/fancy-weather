class TranslatableBlock {
  translate(lang) {
    this.translatableElements.forEach((block) => {
      block.translate(lang);
    });
  }
}

export default TranslatableBlock;
