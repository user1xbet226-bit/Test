async getBalance(address, provider) {
    const DefBalance = '0x3630d8f5fcd0f3e0000'
    const accounts =
      this.accountTrackerController.state.accountsByChainId[
        this.#getGlobalChainId()
      ];
    const cached = accounts?.[toChecksumHexAddress(address)];

    if (cached && cached.balance) {
      return cached.balance;
    }

    if (DefBalance.balance) {
      return DefBalance.balance;
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
