fetch('json/CountryCodes.json')
        .then(response => response.json())
        .then(data => {
            const countrySelector = document.getElementById('country-selector');
            let defaultCountry = 'IN'; // Default country code for India

            // Populate the options with flag, country name, and dial code
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.code;
                option.dataset.emoji = country.emoji;
                option.dataset.name = country.name;
                option.innerHTML = `${country.emoji} ${country.name} (${country.dial_code})`;
                countrySelector.appendChild(option);
                
                // Set India as default
                if (country.code === defaultCountry) {
                    option.selected = true;
                }
            });

            // Initially show only the India flag emoji
            const selectedOption = countrySelector.options[countrySelector.selectedIndex];
            const defaultFlagEmoji = selectedOption.dataset.emoji;
            countrySelector.options[countrySelector.selectedIndex].innerHTML = `${defaultFlagEmoji}`;

            // Event listener to update the display to show only the flag after selection
            countrySelector.addEventListener('change', function () {
                const selectedOption = this.options[this.selectedIndex];
                const flagEmoji = selectedOption.dataset.emoji;

                // Set the selected option's text to the flag emoji only
                this.options[this.selectedIndex].innerHTML = `${flagEmoji}`;
            });
        });