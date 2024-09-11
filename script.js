const token = "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"
const inputText = document.getElementById('input')
const image = document.getElementById('image')
const button = document.getElementById('button')

async function query() {
	image.src = "/loading.gif"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
		{
			headers: {
				Authorization: `Bearer ${token}`
			},
			method: "POST",
			body: JSON.stringify({'inputs': inputText.value}),
		}
	);
	const result = await response.blob();
	return result;
}

button.addEventListener('click', async function () {
    query().then((response) => {
        const objectURL = URL.createObjectURL(response)
        image.src = objectURL
    });
});