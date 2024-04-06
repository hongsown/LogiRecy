import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { GetDetectWasteDto } from './dto/get-detect-waste-dto';
@Injectable()
export class DetectWasteService {
  constructor(private httpService: HttpService) {}
  async getDetectWaste(urlImage: string): Promise<GetDetectWasteDto> {
    try {
      const response = await this.httpService
        .get(`${process.env.URL_SERVER_AI}/analyze?image=${urlImage}`)
        .toPromise();
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
