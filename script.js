const documents = {
    "ABC123": "documents/sample-document.pdf",
    "TEST001": "documents/test-document.pdf",
    "DOC2026": "documents/document-2026.pdf"
};

function verifyDocument() {

    const input = document.getElementById("verificationNumber");

    const result = document.getElementById("result");

    const verificationNumber = input.value.trim().toUpperCase();

    if (verificationNumber === "") {

        result.innerHTML = `
            <p class="error">
                Please enter a verification number.
            </p>
        `;

        return;
    }

    if (documents[verificationNumber]) {

        const pdfURL = documents[verificationNumber];

        result.innerHTML = `
            <p class="success">
                Verification successful ✓
            </p>

            <a
                href="${pdfURL}"
                target="_blank"
                class="view-pdf"
            >
                VIEW PDF
            </a>
        `;

    } else {

        result.innerHTML = `
            <p class="error">
                Invalid verification number.
            </p>
        `;

    }
}