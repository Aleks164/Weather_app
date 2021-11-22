import { main } from "./3";

describe("createParagraphList", () => {
  beforeEach(() => {
    const el = document.createElement("div");
    document.body.append(el);
    main(el);
  });

  afterEach(() => {
    document.getElementsByTagName("body")[0].innerHTML = "";
  });
  it("Checking the input field", () => {
    expect(document.querySelector("#userInput")).toBeTruthy();
  });
  it("Checking the button", () => {
    expect(document.querySelector("#button")).toBeTruthy();
  });
  // it("Checking the button which should visible when input is not empty", () => {
  //   const input = document.querySelector("#userInput");
  //   const button = document.querySelector("#hide");
  //   const event = new Event("input");
  //   input.value = "123";
  //   input.dispatchEvent(event);
  //   expect(button.style.visibility).toBe("visible");
  // });
  it("Checking new <p> after click button", () => {
    const input = document.querySelector("#userInput");
    const button = document.querySelector("#button");
    const divP = document.querySelector("#weatherInfo");
    const inputText = "test";
    input.value = inputText;
    button.click();
    const p3list = document.querySelector("#olList");
    const p3listArr = [...p3list];
    const listLenght = p3listArr.length;
    expect(listLenght).toBe(1);
    expect(divP.innerHTML).toContain(inputText);
  });

  it("Checking the list <p> should not contain more than 10 elements and have the last elements", () => {
    const input = document.querySelector("#userInput");
    const button = document.querySelector("#button");
    const divP = document.querySelector("#olList");
    for (let i = 0; i < 3; i++) {
      input.value = `another ${i}`;
      button.click();
    }

    expect(localStorage).toBe(9);
    input.value = "TEST";
    button.click();
    expect(divP.innerHTML).toBe(3);

    // localStorage.clear();
    // expect(localStorage.length).toBe(0);

    // divP.innerHTML = "";
    // for (let i = 0; i < 3; i++) {
    //   input.value = `another ${i}`;
    //   button.click();
    // }
    // expect(divP.childElementCount).toBe(3);
    // console.log(divP.childElementCount);
    // expect(divP.innerHTML).toContain("another 6");
    // expect(divP.innerHTML).toContain("another 5");
    // expect(divP.innerHTML).toContain("another 4");
    // expect(divP.innerHTML).toContain("another 3");
    // expect(divP.innerHTML).toContain("another 2");
  });
});
