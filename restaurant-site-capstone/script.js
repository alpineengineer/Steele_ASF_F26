// menu
let menuItems = [];
let filteredMenuItems = [];
let currentMenuIndex = 0;

const menuItem =
    document.getElementById("menu-item");

const menuFilter =
    document.getElementById("menu-filter");

const prevButton =
    document.getElementById("prev-button");

const nextButton =
    document.getElementById("next-button");


if (menuItem) {

    fetch("menu.json")

        .then(function (response) {

            return response.json();

        })

        .then(function (data) {

            menuItems = data;
            filteredMenuItems = menuItems;

            console.log(menuItems);

            displayMenuItem();

        })

        .catch(function (error) {

            console.log("Menu could not be loaded.");
            console.log(error);

        });

}


const money = new Intl.NumberFormat(
    "en-US",
    {
        style: "currency",
        currency: "USD"
    }
);


function displayMenuItem() {

    if (filteredMenuItems.length === 0) {
        return;
    }

    const item =
        filteredMenuItems[currentMenuIndex];

    const image =
        document.getElementById("menu-item-image");

    const name =
        document.getElementById("menu-item-name");

    const description =
        document.getElementById("menu-item-description");

    const category =
        document.getElementById("menu-item-category");

    const price =
        document.getElementById("menu-item-price");


    image.src = item.image;
    image.alt = item.name;

    name.textContent =
        item.name;

    description.textContent =
        item.description;

    category.textContent =
        "Category: " + item.category;

    price.textContent =
        money.format(item.price);

}


function nextImage() {

    currentMenuIndex++;

    if (currentMenuIndex >= filteredMenuItems.length) {

        currentMenuIndex = 0;

    }

    displayMenuItem();

}


function prevImage() {

    currentMenuIndex--;

    if (currentMenuIndex < 0) {

        currentMenuIndex =
            filteredMenuItems.length - 1;

    }

    displayMenuItem();

}


if (prevButton) {

    prevButton.addEventListener(
        "click",
        prevImage
    );

}


if (nextButton) {

    nextButton.addEventListener(
        "click",
        nextImage
    );

}


if (menuFilter) {

    menuFilter.addEventListener(
        "change",
        function () {

            const selectedCategory =
                menuFilter.value;

            if (selectedCategory === "All") {

                filteredMenuItems =
                    menuItems;

            } else {

                filteredMenuItems =
                    menuItems.filter(function (item) {

                        return item.category === selectedCategory;

                    });

            }

            currentMenuIndex = 0;

            displayMenuItem();

        }
    );

}


// reservations
const reservationForm =
    document.getElementById("reservation-form");


if (reservationForm) {

    reservationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const partySize =
                document.getElementById("party-size").value;

            const date =
                document.getElementById("date").value;

            const time =
                document.getElementById("time").value;

            const dietaryNotes =
                document.getElementById("dietary-notes").value.trim();

            const newsletter =
                document.getElementById("newsletter").checked;

            const seatingChoice =
                document.querySelector(
                    'input[name="seating"]:checked'
                );


            let errors = [];


            if (name === "") {

                errors.push(
                    "Name is required."
                );

            }


            if (name.length > 20) {

                errors.push(
                    "Name must be 20 characters or fewer."
                );

            }


            if (email === "") {

                errors.push(
                    "Email is required."
                );

            } else if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                errors.push(
                    "Please enter a valid email address."
                );

            }


            if (partySize === "") {

                errors.push(
                    "Party size is required."
                );

            } else if (
                Number(partySize) < 1 ||
                Number(partySize) > 8
            ) {

                errors.push(
                    "Party size must be between 1 and 8."
                );

            }


            if (date === "") {

                errors.push(
                    "Date is required."
                );

            }


            if (time === "") {

                errors.push(
                    "Time is required."
                );

            }


            if (seatingChoice === null) {

                errors.push(
                    "Please choose a seating preference."
                );

            }


            if (dietaryNotes.length > 30) {

                errors.push(
                    "Dietary notes must be 30 characters or fewer."
                );

            }


            const formMessage =
                document.getElementById("form-message");

            formMessage.innerHTML = "";


            if (errors.length > 0) {

                const alertBox =
                    document.createElement("div");

                alertBox.classList.add(
                    "alert",
                    "alert-danger"
                );


                errors.forEach(function (error) {

                    const message =
                        document.createElement("div");

                    message.textContent =
                        error;

                    alertBox.appendChild(
                        message
                    );

                });


                formMessage.appendChild(
                    alertBox
                );

            } else {

                const reservation = {

                    name: name,

                    email: email,

                    partySize: Number(partySize),

                    date: date,

                    time: time,

                    seating: seatingChoice.value,

                    dietaryNotes: dietaryNotes,

                    newsletter: newsletter

                };


                console.log(
                    JSON.stringify(reservation)
                );


                const alertBox =
                    document.createElement("div");

                alertBox.classList.add(
                    "alert",
                    "alert-success"
                );

                alertBox.textContent =
                    "Reservation request submitted successfully.";

                formMessage.appendChild(
                    alertBox
                );

            }

        }
    );


    reservationForm.addEventListener(
        "reset",
        function () {

            const formMessage =
                document.getElementById("form-message");

            formMessage.innerHTML = "";

        }
    );

}


// hiring
const hiringForm =
    document.getElementById("hiring-form");

const applicationMessage =
    document.getElementById("application-message");

const characterCount =
    document.getElementById("character-count");

const experienceInput =
    document.getElementById("experience");


// live character counter
if (applicationMessage && characterCount) {

    applicationMessage.addEventListener(
        "input",
        function () {

            const count =
                applicationMessage.value.length;

            characterCount.textContent =
                count + " / 200 characters";

        }
    );

}


// prevent negative years of experience
if (experienceInput) {

    experienceInput.addEventListener(
        "input",
        function () {

            if (Number(experienceInput.value) < 0) {

                experienceInput.value = 0;

            }

        }
    );

}


if (hiringForm) {

    hiringForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("applicant-name").value.trim();

            const email =
                document.getElementById("applicant-email").value.trim();

            const position =
                document.getElementById("position").value;

            const experience =
                document.getElementById("experience").value;

            const availability =
                document.getElementById("availability").value;

            const message =
                document.getElementById("application-message").value.trim();


            let errors = [];


            if (name === "") {

                errors.push(
                    "Name is required."
                );

            }


            if (name.length > 20) {

                errors.push(
                    "Name must be 20 characters or fewer."
                );

            }


            if (email === "") {

                errors.push(
                    "Email is required."
                );

            } else if (
                !email.includes("@") ||
                !email.includes(".")
            ) {

                errors.push(
                    "Please enter a valid email address."
                );

            }


            if (position === "") {

                errors.push(
                    "Please choose a position."
                );

            }


            if (experience === "") {

                errors.push(
                    "Years of experience is required."
                );

            } else if (Number(experience) < 0) {

                errors.push(
                    "Years of experience cannot be negative."
                );

            }


            if (availability === "") {

                errors.push(
                    "Please choose your availability."
                );

            }


            if (message === "") {

                errors.push(
                    "Please tell us why you would like to work here."
                );

            }


            if (message.length > 200) {

                errors.push(
                    "Your message must be 200 characters or fewer."
                );

            }


            const formMessage =
                document.getElementById("hiring-form-message");

            formMessage.innerHTML = "";


            if (errors.length > 0) {

                const alertBox =
                    document.createElement("div");

                alertBox.classList.add(
                    "alert",
                    "alert-danger"
                );


                errors.forEach(function (error) {

                    const message =
                        document.createElement("div");

                    message.textContent =
                        error;

                    alertBox.appendChild(
                        message
                    );

                });


                formMessage.appendChild(
                    alertBox
                );

            } else {

                const application = {

                    name: name,

                    email: email,

                    position: position,

                    experience: Number(experience),

                    availability: availability,

                    message: message

                };


                console.log(
                    JSON.stringify(application)
                );


                const alertBox =
                    document.createElement("div");

                alertBox.classList.add(
                    "alert",
                    "alert-success"
                );

                alertBox.textContent =
                    "Application submitted successfully.";

                formMessage.appendChild(
                    alertBox
                );

            }

        }
    );


    hiringForm.addEventListener(
        "reset",
        function () {

            const formMessage =
                document.getElementById("hiring-form-message");

            formMessage.innerHTML = "";

            characterCount.textContent =
                "0 / 200 characters";

        }
    );

}