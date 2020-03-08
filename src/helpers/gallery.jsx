import { isServerSideRendering } from '../util';

const archives = src => {
    const blacklist = new Set(['0121.jpg', '0123.jpg']);
    for (let item = 0; item < blacklist.length; item += 1) {
        if (String(src).includes(blacklist[item])) return true;
    }
    return false;
};

const getPhotos = nodes => {
    const arr = [];
    if (isServerSideRendering()) return arr;
    for (const node of nodes) {
        const { src } = node.image.childImageSharp.fixed;
        if (!archives(src)) arr.push({ src, image: node.image });
    }
    return arr;
};

export { getPhotos, archives };
