interface ICourse {
  name: string;
  duration: number;
  educator: string;
}

class CreateCursoService {
  execute({ duration, educator, name }: ICourse) {
    console.log(name, duration, educator);
  }
}

export default new CreateCursoService();
