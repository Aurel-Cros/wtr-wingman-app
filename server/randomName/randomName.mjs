import animals from './animals.mjs';
import adjectives from './adjectives.mjs';

const newName = () => {
    const randAni = Math.floor(Math.random() * animals.length);
    const animal = animals[randAni]
    const randAdj = Math.floor(Math.random() * adjectives.length);
    const adjective = adjectives[randAdj]
        .split('')
        .map((l, i) => {
            if (i > 0)
                return l;
            return l.toUpperCase();
        })
        .join('');
    
    const name = adjective + " " + animal;
    return name;
}
export default newName;