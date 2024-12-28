function renderAdsForPage(page) {
        const ads = JSON.parse(localStorage.getItem('ads')) || [];
        const now = Date.now();
        const adSection = document.getElementById('adSection');

        adSection.innerHTML = ''; // Clear existing ads

        ads.forEach(ad => {
            const visibilityDuration = ad.visibility * 24 * 60 * 60 * 1000;
            const isVisible = ad.status === 'active' && now - ad.createdAt <= visibilityDuration;

            if (ad.targetPage === page && isVisible) {
                const adBanner = document.createElement('div');
                adBanner.className = 'ad-banner';

                adBanner.innerHTML = `
                    <img src="${ad.imageUrl || 'https://via.placeholder.com/1200x200?text=Ad+Image'}" alt="${ad.title}">
                    <div class="ad-banner-content">
                        <h3>${ad.title}</h3>
                        <a href="${ad.url}" target="_blank" onclick="trackClick(${ad.id})">Learn More</a>
                    </div>
                `;

                adSection.appendChild(adBanner);
            }
        });
    }

    function trackClick(adId) {
        const ads = JSON.parse(localStorage.getItem('ads')) || [];
        const ad = ads.find(a => a.id === adId);
        if (ad) {
            ad.clicks += 1;
            localStorage.setItem('ads', JSON.stringify(ads));
        }
    }

    // Render ads for the 'home' page
    renderAdsForPage('index');