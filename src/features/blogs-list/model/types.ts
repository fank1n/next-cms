interface BlogListElement {
  id: string;
  title: string;
  description: string;
}

interface CreateListElementCommand {
  title: string;
  description: string;
}

interface DeleteBligListElementCommand {
  id: string;
}
