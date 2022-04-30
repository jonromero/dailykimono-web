function text_rotation() {
    return {
        animated_text: 'epic',

        rotate_words() {
            var words = ['gyroscope', 'marmalade', 'galaxy', 'airplane', 'charity', 'metropolis', 'rhinoceros', 'technology', 'telescope'],
                currentWord = 0;

            setInterval(() => {
                if (currentWord > words.length - 1) currentWord = 0;
                this.animated_text = words[currentWord];
                currentWord++;
            }, 200);
        }
    }
}