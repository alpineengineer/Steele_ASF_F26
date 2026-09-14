const MENU_ITEMS = [
  {
    id: 1,
    name: "Clam Chowder Combo",
    description: "New England clam chowder served with crackers.",
    price: 8.00,
    category: "Lunch"
  },
  {
    id: 2,
    name: "Harbor Breakfast",
    description: "Eggs, potatoes, toast, and smoked sausage.",
    price: 11.50,
    category: "Breakfast"
  },
  {
    id: 3,
    name: "Maple French Toast",
    description: "Thick-cut toast with maple syrup and fresh berries.",
    price: 9.50,
    category: "Breakfast"
  },
  {
    id: 4,
    name: "Shrimp Scampi",
    description: "Garlic butter shrimp served with pasta and vegetables.",
    price: 15.00,
    category: "Dinner"
  },
  {
    id: 5,
    name: "Fish and Chips",
    description: "Fried fish with seasoned waffle fries.",
    price: 13.00,
    category: "Lunch"
  },
  {
    id: 6,
    name: "Baked Scallops",
    description: "Baked scallops served with two house sides.",
    price: 17.50,
    category: "Dinner"
  },
  {
    id: 7,
    name: "Lobster Roll",
    description: "Chilled lobster with herbs on a toasted roll.",
    price: 18.00,
    category: "Lunch"
  },
  {
    id: 8,
    name: "Coastal Omelet",
    description: "Three-egg omelet with cheese, peppers, and crab.",
    price: 12.00,
    category: "Breakfast"
  },
  {
    id: 9,
    name: "Salmon Dinner",
    description: "Grilled salmon with roasted vegetables and potatoes.",
    price: 19.00,
    category: "Dinner"
  },
  {
    id: 10,
    name: "Fisherman's Stew",
    description: "Tomato seafood stew with fish, shrimp, and herbs.",
    price: 16.00,
    category: "Dinner"
  },
  {
    id: 11,
    name: "Crab Cake Sandwich",
    description: "House crab cake with lettuce and remoulade.",
    price: 14.00,
    category: "Lunch"
  },
  {
    id: 12,
    name: "Blueberry Pancakes",
    description: "Buttermilk pancakes with blueberries and maple syrup.",
    price: 9.00,
    category: "Breakfast"
  }
];
const menuBody = document.getElementById("menu-body");

if (menuBody) {
  const money = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
  MENU_ITEMS.forEach(function (item) {

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = item.description;

    const categoryCell = document.createElement("td");
    categoryCell.textContent = item.category;

    const priceCell = document.createElement("td");
    priceCell.textContent = money.format(item.price);

    row.appendChild(nameCell);
    row.appendChild(descriptionCell);
    row.appendChild(categoryCell);
    row.appendChild(priceCell);

    menuBody.appendChild(row);
  });
}
const reservationForm = document.getElementById("reservation-form");

if (reservationForm) {

  reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const partySize = document.getElementById("party-size").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const dietaryNotes = document.getElementById("dietary-notes").value.trim();
    const newsletter = document.getElementById("newsletter").checked;

    const seatingChoice =
      document.querySelector('input[name="seating"]:checked');

    console.log(name);
    console.log(email);
    console.log(partySize);
    console.log(date);
    console.log(time);
    console.log(seatingChoice);
    console.log(dietaryNotes);
    console.log(newsletter);
    let errors = [];
    if (name === "") {
      errors.push("Name is required.");
    }

    if (name.length > 20) {
      errors.push("Name must be 20 characters or fewer.");
    }

    if (email === "") {
      errors.push("Email is required.");
    } else if (!email.includes("@") || !email.includes(".")) {
      errors.push("Please enter a valid email address.");
    }

    if (partySize === "") {
      errors.push("Party size is required.");
    }

    if (date === "") {
      errors.push("Date is required.");
    }

    if (time === "") {
      errors.push("Time is required.");
    }

    if (seatingChoice === null) {
      errors.push("Please choose a seating preference.");
    }

    if (dietaryNotes.length > 30) {
      errors.push("Dietary notes must be 30 characters or fewer.");
    }
    const formMessage = document.getElementById("form-message");

    formMessage.innerHTML = "";

    if (errors.length > 0) {

      const alertBox = document.createElement("div");
      alertBox.classList.add("alert", "alert-danger");

      errors.forEach(function (error) {
        const message = document.createElement("div");
        message.textContent = error;
        alertBox.appendChild(message);
      });

      formMessage.appendChild(alertBox);

    } else {

      const reservation = {
        name: name,
        email: email,
        partySize: partySize,
        date: date,
        time: time,
        seating: seatingChoice.value,
        dietaryNotes: dietaryNotes,
        newsletter: newsletter
      };

      console.log(reservation);

      const alertBox = document.createElement("div");
      alertBox.classList.add("alert", "alert-success");
      alertBox.textContent = "Reservation request submitted successfully.";

      formMessage.appendChild(alertBox);
    }
  });
  reservationForm.addEventListener("reset", function() {

    const formMessage = document.getElementById("form-message");
    formMessage.innerHTML = "";

  });
}
