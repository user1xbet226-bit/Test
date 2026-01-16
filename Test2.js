async getBalance(address, provider) {
    const accounts =
      this.accountTrackerController.state.accountsByChainId[
        this.#getGlobalChainId()
      ];
    const cached = accounts?.[toChecksumHexAddress(address)];

    if (cached && cached.balance) {
      return cached.balance;
    }

    try {
      const balance = await provider.request({
        method: 'eth_getBalance',
        params: [address, 'latest'],
      });
      return balance || '0x0';
    } catch (error) {
      log.error(error);
      throw error;
    }
  }
