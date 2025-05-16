const books = [
  "Zero to One by Peter Thiel",
  "The Lean Startup by Eric Ries",
  "The Hard Thing About Hard Things by Ben Horowitz",
  "Hooked: How to Build Habit-Forming Products by Nir Eyal",
  "Start with Why by Simon Sinek",
  "Rework by Jason Fried & David Heinemeier Hansson",
  "Steve Jobs by Walter Isaacson",
  "Deep Work by Cal Newport",
  "Rich Dad Poor Dad by Robert Kiyosaki",
  "Crushing It! by Gary Vaynerchuk"
];

function displayTopToBottom() {
  displayBooks([...books]);
}

function displayBottomToTop() {
  displayBooks([...books].reverse());
}

function displayBooks(bookArray) {
  const list = document.getElementById("bookList");
  list.innerHTML = "";
  bookArray.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book;
    list.appendChild(li);
  });
}

window.onload = displayTopToBottom;