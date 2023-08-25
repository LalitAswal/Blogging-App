mongoose.Query.prototype.exec = async function() {
    if (!this.enableCache) {
        console.log('Data Source: Database');
        return exec.apply(this, arguments);
    }

    const key = JSON.stringify(Object.assign({}, this.getQuery(), {
        collection: this.mongooseCollection.name,
    }));

    const cachedValue = await client.hget(this.hashKey, key);

    if (cachedValue) {
        const parsedCache = JSON.parse(cachedValue);

        console.log('Data Source: Cache');

        return Array.isArray(parsedCache) 
                ?  parsedCache.map(doc => new this.model(doc)) 
                :  new this.model(parsedCache);
    }

    const result = await exec.apply(this, arguments);
    
    client.hmset(this.hashKey, key, JSON.stringify(result), 'EX', 300);

    console.log('Data Source: Database');
    return result;
};
