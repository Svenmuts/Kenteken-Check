window.onload = function() {
  // Functie om de API aan te roepen en de gegevens op te halen
  async function getKentekenData(kenteken) {
    const response = await fetch(`https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${kenteken}`);
    const data = await response.json();
    return data;
  }

  // Functie om de datum te formatteren
  function formatDate(date) {
    return date.slice(0, 4) + '-' + date.slice(4, 6) + '-' + date.slice(6);
  }

  // Functie om de opgehaalde gegevens weer te geven op de website
  async function displayKentekenData(event) {
    event.preventDefault();
    let kenteken = document.getElementById('kenteken').value;
    // Verwijder streepjes uit het kenteken
    kenteken = kenteken.replace(/-/g, '');
    const data = await getKentekenData(kenteken);
    const div = document.getElementById('kentekenInfo');
    
    // Leeg de div voor nieuwe informatie
    div.innerHTML = '';

    // Controleer of er data is ontvangen
    if (data[0]) {
      // Maak nieuwe elementen voor elke stukje informatie
      const merk = document.createElement('p');
      merk.textContent = `Merk: ${data[0].merk}`;
      div.appendChild(merk);

      const handelsbenaming = document.createElement('p');
      handelsbenaming.textContent = `Handelsbenaming: ${data[0].handelsbenaming}`;
      div.appendChild(handelsbenaming);

      const inrichting = document.createElement('p');
      inrichting.textContent = `Inrichting: ${data[0].inrichting}`;
      div.appendChild(inrichting);

      const datumEersteToelating = document.createElement('p');
      datumEersteToelating.textContent = `Datum eerste toelating: ${formatDate(data[0].datum_eerste_toelating)}`;
      div.appendChild(datumEersteToelating);

      const voertuigsoort = document.createElement('p');
      voertuigsoort.textContent = `Voertuigsoort: ${data[0].voertuigsoort}`;
      div.appendChild(voertuigsoort);

      const aantalZitplaatsen = document.createElement('p');
      aantalZitplaatsen.textContent = `Aantal zitplaatsen: ${data[0].aantal_zitplaatsen}`;
      div.appendChild(aantalZitplaatsen);

      const aantalCilinders = document.createElement('p');
      aantalCilinders.textContent = `Aantal cilinders: ${data[0].aantal_cilinders}`;
      div.appendChild(aantalCilinders);

      const cilinderinhoud = document.createElement('p');
      cilinderinhoud.textContent = `Cilinderinhoud: ${data[0].cilinderinhoud}`;
      div.appendChild(cilinderinhoud);

      const massaLedigVoertuig = document.createElement('p');
      massaLedigVoertuig.textContent = `Massa ledig voertuig: ${data[0].massa_ledig_voertuig}`;
      div.appendChild(massaLedigVoertuig);

      const toegestaneMaximumMassaVoertuig = document.createElement('p');
      toegestaneMaximumMassaVoertuig.textContent = `Toegestane maximum massa voertuig: ${data[0].toegestane_maximum_massa_voertuig}`;
      div.appendChild(toegestaneMaximumMassaVoertuig);

      const aantalDeuren = document.createElement('p');
      aantalDeuren.textContent = `Aantal deuren: ${data[0].aantal_deuren}`;
      div.appendChild(aantalDeuren);

      const aantalWielen = document.createElement('p');
      aantalWielen.textContent = `Aantal wielen: ${data[0].aantal_wielen}`;
      div.appendChild(aantalWielen);

      const eersteKleur = document.createElement('p');
      eersteKleur.textContent = `Eerste kleur: ${data[0].eerste_kleur}`;
      div.appendChild(eersteKleur);

      const tweedeKleur = document.createElement('p');
      tweedeKleur.textContent = `Tweede kleur: ${data[0].tweede_kleur}`;
      div.appendChild(tweedeKleur);

      const aantalWielbasis = document.createElement('p');
      aantalWielbasis.textContent = `Wielbasis: ${data[0].wielbasis}`;
      div.appendChild(aantalWielbasis);

      const aantalExportIndicator = document.createElement('p');
      aantalExportIndicator.textContent = `Export indicator: ${data[0].export_indicator}`;
      div.appendChild(aantalExportIndicator);

      const aantalWachtOpKeuren = document.createElement('p');
      aantalWachtOpKeuren.textContent = `Wacht op keuren: ${data[0].wacht_op_keuren}`;
      div.appendChild(aantalWachtOpKeuren);

      const aantalWamVerzekerd = document.createElement('p');
      aantalWamVerzekerd.textContent = `WAM verzekerd: ${data[0].wam_verzekerd}`;
      div.appendChild(aantalWamVerzekerd);



    } else {
      div.textContent = 'Geen informatie gevonden voor dit kenteken.';
    }
  }

  // Voeg een event listener toe aan het formulier
  document.getElementById('kentekenForm').addEventListener('submit', displayKentekenData);
}