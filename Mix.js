const randomStarSign = () => {
    const rand = Math.floor(Math.random() * 12)
    switch (rand) {
        case 0: return 'Aries'; break;
        case 1: return 'Taurus'; break;
        case 2: return 'Gemini'; break;
        case 3: return 'Cancer'; break;
        case 4: return 'Leo'; break;
        case 5: return 'Virgo'; break;
        case 6: return 'Libra'; break;
        case 7: return 'Scorpio'; break;
        case 8: return 'Sagittarius'; break;
        case 9: return 'Capricorn'; break;
        case 10: return 'Aquarius'; break;
        case 11: return 'Pisces'; break;
        }
}
let x = randomStarSign()
const starSignText = (x) => {
    switch (x) {
        case 'Aries': return 'March 21-April 19. Element: Fire. Ruling Planet: Mars. Interesting Fact: Aries are known for their boldness and determination. They’re natural-born leaders, and they’re often the first to jump into new ventures because they thrive on challenges.'; break;
        case 'Taurus': return 'April 20-May 20. Element: Earth. Ruling Planet: Venus. Interesting Fact: Taureans are incredibly loyal and love stability. They’re also very sensual and enjoy the finer things in life, like good food, music, and luxury.'; break;
        case 'Gemini': return 'May 21-June 20. Element: Air. Ruling Planet: Mercury. Interesting Fact: Geminis are known for their adaptability and quick wit. They have two distinct sides to their personality, which is where the "twins" symbol comes from—they can be social one moment, introspective the next.'; break;
        case 'Cancer': return 'June 21-July 22. Element: Water. Ruling Planet: Moon. Interesting Fact: Cancers are deeply intuitive and emotionally driven. They have an incredible ability to empathize with others and are fiercely protective of their loved ones.'; break;
        case 'Leo': return 'July 23-August 22. Element: Fire. Ruling Planet: Sun. Interesting Fact: Leos are natural-born performers and love being in the spotlight. They’re incredibly charismatic and have a big heart, often using their energy to uplift others.'; break;
        case 'Virgo': return 'August 23-September 22. Element: Earth. Ruling Planet: Mercury. Interesting Fact: Virgos are known for their attention to detail and organization. They can be perfectionists, but their meticulousness often leads them to excel in tasks that require precision.'; break;
        case 'Libra': return 'September 23-October 22. Element: Air. Ruling Planet: Venus. Interesting Fact: Libras are all about balance and harmony. They have a strong sense of justice and are great at seeing both sides of an issue, making them excellent mediators.'; break;
        case 'Scorpio': return 'October 23-November 21. Element: Water. Ruling Planet: Pluto. Interesting Fact: Scorpios are known for their intensity and passion. They’re incredibly mysterious and have a powerful intuition, often able to sense the deeper motivations of others.'; break;
        case 'Sagittarius': return 'November 22-December 21. Element: Fire. Ruling Planet: Jupiter. Interesting Fact: Sagittarians are adventurous and love freedom. They’re always seeking new experiences and have a philosophical side that leads them to explore life’s deeper meanings.'; break;
        case 'Capricorn': return 'December 22-January 19. Element: Earth. Ruling Planet: Saturn. Interesting Fact: Capricorns are known for their hard work and ambition. They’re incredibly disciplined and tend to achieve great success in their careers because of their persistence and dedication.'; break;
        case 'Aquarius': return 'January 20-February 18. Element: Air. Ruling Planet: Uranus. Interesting Fact: Aquarians are visionaries who are often ahead of their time. They value independence and innovation, and they tend to be drawn to unconventional or progressive causes.'; break;
        case 'Pisces': return 'February 19-March 20. Element: Water. Ruling Planet: Neptune. Interesting Fact: Pisceans are highly creative and empathetic. They have a strong connection to the arts and are often very intuitive, making them great listeners and caregivers.'; break;
        }
}

const starComp = (x) => {
    if (x === 'Aries' || x === 'Leo') {
        return 'Aries and Leo are a fiery, adventurous duo known for their shared passion and dynamic energy.'
    }
    if (x === 'Taurus' || x === 'Capricorn') {
        return 'Taurus and Capricorn are a practical, stable, and dependable pair focused on security and long-term goals.'
    }
    if (x === 'Gemini' || x === 'Aquarius') {
        return 'Gemini and Aquarius are a intellectual match that thrives on stimulating conversation, shared ideas, and freedom.'
    }
    if (x === 'Cancer' || x === 'Scorpio') {
        return 'Cancer and Scorpio are an emotionally intense pairing that connects on a deep, intuitive level, with Scorpio helping Cancer open up.'
    }
    if (x === 'Virgo' || x === 'Capricorn') {
        return 'Virgo and Capricorn are a power couple that offers stability, ambition, and a practical approach to life.'
    }
    if (x === 'Aries' || x === 'Libra') {
        return 'Aries and Libras spontaneous energy is balanced by Libras desire for harmony and diplomacy.'
    }
    if (x === 'Taurus' || x === 'Scorpio') {
        return 'Taurus grounded stability meets Scorpios intense emotional depth and desire for transformation'
    }
    if (x === 'Gemini' || x === 'Sagittarius') {
        return 'Gemini and Sagittarius. These two signs, both mutable, blend spontaneity with a love of adventure and new experiences.'
    }
    if (x === 'Cancer' || x === 'Capricorn') {
        return 'Cancer and Capricorn. The nurturing Cancer finds a grounding force in the practical and responsible Capricorn'
    }
    if (x === 'Leo' || x === 'Aquarius') {
        return 'Leo and Aquarius. Leos dramatic flair is met with Aquarius humanitarian and individualistic nature.'
    }
    if (x === 'Virgo' || x === 'Pisces') {
        return 'Virgos analytical approach complements Pisces compassionate and intuitive understanding, creating a balanced partnership.'
    }
}
let y= `You're a ${x}. ${starSignText(x)}. ${starComp(x)}`
console.log(y)
