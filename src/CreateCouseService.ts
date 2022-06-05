interface Course {
    name: string; duration: number; educator: string;
}

class CreateCursoService {

    execute({duration, educator, name} : Course) {
        console.log(name, duration, educator);
    }
}

export default new CreateCursoService();
