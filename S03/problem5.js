let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
    buildSentence: function () {
        return this.subject && this.verb && this.object
            ? this.subject + " " + this.verb + " " + this.object
            : "Incomplete sentence"
    },
    updateProperty: function(property, value) {
        this[property] = value
     }
};

console.log(sentenceBuilder.buildSentence())
sentenceBuilder.updateProperty("subject","The cat")
sentenceBuilder.updateProperty("verb","is running" )
sentenceBuilder.updateProperty("object","on the roof" )
console.log(sentenceBuilder.buildSentence())
