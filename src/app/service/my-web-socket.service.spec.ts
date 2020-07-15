import { TestBed } from '@angular/core/testing';

import { MyWebSocketService } from './my-web-socket.service';

describe('MyWebSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyWebSocketService = TestBed.get(MyWebSocketService);
    expect(service).toBeTruthy();
  });
});
