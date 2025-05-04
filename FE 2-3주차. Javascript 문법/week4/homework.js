class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
async function loadJson(url) {
    // promise then 부분
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}
async function narutoIsNotOtaku() {
    let title;
    while (true) {
        title = prompt("애니메이션 제목을 입력하세요.", "naruto");
        // promise 체이닝 catch 부분 -> try catch문 사용해서 동일 로직 시행 가능
        try {
            res = await loadJson(`https://animechan.vercel.app/api/random/anime?title=${title}`);
            break;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece정도나 입력해주세요.");
            } else {
                throw err;
            }
        }
    }
    alert(`${res.character}: ${res.quote}.`);
    return res;
}
narutoIsNotOtaku();