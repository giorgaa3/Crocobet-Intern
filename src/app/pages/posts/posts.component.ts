import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../Models/post.model';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts = signal<IPost[]>([]);
  selectedPost = signal<IPost | null>(null);

  private dataService = inject(DataService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    // მონაცემების წამოღება და signal-ის განახლება
    this.dataService.getPosts().subscribe((allPosts) => {
      const userId = this.route.snapshot.paramMap.get('id');
      const filteredPosts = userId
        ? allPosts.filter((post) => post.id === +userId)
        : allPosts;

      this.posts.set(filteredPosts);
    });
  }

  openDetails(post: IPost): void {
    this.selectedPost.set(post);
  }

  closeDetails(): void {
    this.selectedPost.set(null);
  }
}
