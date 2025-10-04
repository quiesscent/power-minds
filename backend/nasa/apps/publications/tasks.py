# Celery tasks for summarization, embedding creation, and tagging
from celery import shared_task
from .models import Publication, Summary, Embedding

@shared_task
def summarize_publication(publication_id):
    pub = Publication.objects.get(id=publication_id)
    # call NLP summarizer here (OpenAI / local model / huggingface)
    summary_text = f"Auto-summary for: {pub.title}"
    Summary.objects.update_or_create(publication=pub, defaults={'summary_text': summary_text})
    return summary_text

@shared_task
def create_embedding(publication_id):
    pub = Publication.objects.get(id=publication_id)
    # placeholder: compute emb
