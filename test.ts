let divElement = document.createElement("div");
const tempDiv = document.createElement("div");

if (divElement) {
    divElement.insertAdjacentElement("beforebegin", tempDiv);
}