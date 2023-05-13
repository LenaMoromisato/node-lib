function extraiLinks (arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaStatus (listaURLs) {
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
            const response = await fetch(url);
            return response.status;
        })
    )
    return arrStatus;
}

export default async function listaValidada (listaDeLinks) {
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);
    return status;
}

// const res = await fetch('https://nodejs.org/api/documentation.json');
// if (res.ok) {
//     const data = await res.json();
//     console.log(data);
// }

//[gatinho salsicha](http://gatinhosalsicha.com.br/)