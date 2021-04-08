export default class Person {
    constructor(
        public id: number,
        public name: string,
        public suspects: string, //suspects
        public topic: string,   //title
        public date: string,
        public location: string,
        public details: string,
        public reward: string,
        public fieldOffice: string,
        public image: string
    ) {}
}