import { Service } from 'vue-typedi';

@Service()
export class LoggerService {

  public log(message: any) {
    console.log(message); // tslint:disable-line
  }

  public error(error: any) {
    console.error(error); // tslint:disable-line
  }

}
