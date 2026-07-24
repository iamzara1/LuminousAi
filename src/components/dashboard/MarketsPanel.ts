useEffect(() => {
  async function loadMarket() {
    try {
      const data = await getMarketOverview();
      setCoins(data.prices);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  loadMarket();

  const interval = setInterval(() => {
    loadMarket();
  }, 30000);

  return () => clearInterval(interval);

}, []);
