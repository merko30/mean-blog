import { TestBed } from '@angular/core/testing';

import { PostDetailResolverService } from './post-detail-resolver.service';

describe('PostDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostDetailResolverService = TestBed.get(PostDetailResolverService);
    expect(service).toBeTruthy();
  });
});
