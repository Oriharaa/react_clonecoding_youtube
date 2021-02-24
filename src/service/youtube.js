class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  };

  async search(query) {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&type=video&q=${query}&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map(item => ({ ...item, id: item.id.videoId }));
  };

  async emsi(){
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=brandingSettings&id=UCweOkPb1wVVH0Q0Tlj4a5Pw\n&key=AIzaSyC1VMgYAV5t4qY_YAMC0PePdNOKo90CtZI&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  };

}

export default Youtube;