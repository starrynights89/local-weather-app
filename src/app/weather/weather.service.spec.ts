import { TestBed, inject } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { WeatherService } from './weather.service'

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [WeatherService],
  }))

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    // const service: WeatherService = TestBed.get(WeatherService)
    expect(service).toBeTruthy()
  })
  )
})
