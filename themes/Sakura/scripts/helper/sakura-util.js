'use strict';

hexo.extend.helper.register('copyright', birthyear => {
    const today = new Date();
    const year = today.getFullYear();
    birthyear = birthyear || year;
    if (birthyear == year) {
        return `© ${birthyear}`;
    }
    return `© ${birthyear}-${year}`;
});