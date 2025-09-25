function filterTable() {
  const form = document.getElementById("filters");
  const selectedColors = Array.from(form.querySelectorAll("input[name='color']:checked")).map(cb => cb.value);
  const selectedStars = Array.from(form.querySelectorAll("input[name='stars']:checked")).map(cb => cb.value);
  const selectedTypes = Array.from(form.querySelectorAll("input[name='type']:checked")).map(cb => cb.value);
  const selectedClasses = Array.from(form.querySelectorAll("input[name='class']:checked")).map(cb => cb.value);

  // Now loop through your table rows and show/hide based on whether the row matches
}