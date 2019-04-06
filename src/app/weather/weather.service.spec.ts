import { TestBed, inject } from '@angular/core/testing'

import { WeatherService } from './weather.service'

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [WeatherService],
  }))

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    // const service: WeatherService = TestBed.get(WeatherService)
    expect(service).toBeTruthy()
  })
  )
})
