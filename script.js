let slideIndex = 0;
const slides = [
    {
        image: 'https://media.istockphoto.com/id/1520338461/photo/a-chimpanzee-portrait.jpg?s=612x612&w=0&k=20&c=olBmgTS-hPfbGZ3pCk9Jsmz54hFdbJDhTm6ejh4JEsg=',
        text: "Esaari nijam chpe 🤔🤔 image chusina ventane mirror undhi anukunnav kadha..😁😅😂 ,kaadhu adhi image..Esaari chpta..next page ki vellu"
    },
    {
        image: 'https://thumbs.dreamstime.com/b/funny-looking-young-men-women-having-troubled-communication-over-phone-man-woman-having-troubled-communication-123570422.jpg?w=1400',
        text: "Paina unna image chudaagane neeku m gurtochindho teliyadhu kaani naaku matram nve gurtochav 🤭😉😝 nv nee frnd m dicusss chestunnaro jara naaku chpparaadhe..😁😁😁"
    },
    {
        image: 'https://imgs.search.brave.com/oGuXkx7sfd2UBA7EZLDUW2ySEWCEqJw11e6rfnL5Rqk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vNE9iMHUz/SDBDMG9KT2NrbDhk/U21FNndPcXRYTXlU/S19STTkzQ3M4WWlU/dy9yczpmaXQ6NTYw/OjMyMDoxOjAvZzpj/ZS9hSFIwY0hNNkx5/OXRaV1JwL1lTNXBj/M1J2WTJ0d2FHOTAv/Ynk1amIyMHZhV1F2/TlRFei9Oakk1TlRn/MkwzQm9iM1J2L0wy/WnlhV1Z1WkhNdGMy/aGgvY21sdVp5MXpa/V055WlhSei9MbXB3/Wno5elBUWXhNbmcy/L01USW1kejB3Sm1z/OU1qQW0vWXoxSlMz/WXpSMjlvVm1SQi9h/VlZaTm5oSVNGQlhj/bkpRL01YcHdiRXBx/VGtadlJFRkgvZEMw/dFRGOVhNa2RWUFE.jpeg',
        text: "Arey 🤔🤔 edhi vinu raa evvariki chepaku mundhu unna pics lo oka brian chupattaru KADHAAAA... adhi naadhe..🤭😉😝(Kadha anedhi chala special word na frnd ki andhuke capital words lo petta) eesari ala ndhuku annano pakka chpta.."
    },
    {
        image: 'https://media.istockphoto.com/id/1421336530/photo/a-happy-couple-drinking-tea-in-the-kitchen-talking-and-laughing.jpg?s=612x612&w=0&k=20&c=f743Bq50xl057ISPAJ3OP5jZPV1GWU9g5N2G6tSoIS4=',
        text: "Paina unna image la nv eppudu undali ani (i mean ne smile) alaa annanu..😇😇 evvariki nv naatho matldthunnatu teliyadhu ,telisthe i will miss that smile andhuke ala annanu..bcuz nv navvithe bhaguntav and it really suits u..😇😊🥰 "
    },
    {
        image: 'https://cdn.pixabay.com/photo/2022/08/20/02/22/people-7398084_640.png',
        text: "Ala annadhuku I am Chorry 😔😞..But i feel happy 😇😇 because i am still seeing ur smile..😊🥰 so plse accept my apology..😊😊😊"
    }
];

function nextSlide() {
    if (slideIndex < slides.length) {
        document.getElementById("slide-image").src = slides[slideIndex].image;
        document.getElementById("slide-text").innerText = slides[slideIndex].text;
        slideIndex++;
    } else {
        showLikeButton();
    }
}

function showLikeButton() {
    document.getElementById("next-button").classList.add('hidden');
    document.getElementById("like-button").classList.remove('hidden');
}

function like() {
    alert("Thank you for accepting! I really appreciate it.");
    // You can reset or close the page after the like action.
}
