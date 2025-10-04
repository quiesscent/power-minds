from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Publication, Summary, Entity
from .serializers import PublicationSerializer, SummarySerializer, EntitySerializer


class PublicationViewSet(viewsets.ModelViewSet):
    queryset = Publication.objects.all().order_by('-published_date')
    serializer_class = PublicationSerializer


@action(detail=True, methods=['post'])
def summarize(self, request, pk=None):
    pub = self.get_object()
    # placeholder for async summarization (call Celery task)
    Summary.objects.update_or_create(publication=pub, defaults={'summary_text': 'Summary placeholder', 'tags': []})
    return Response({'status': 'summary created'})




class SummaryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Summary.objects.all()
    serializer_class = SummarySerializer




class EntityViewSet(viewsets.ModelViewSet):
    queryset = Entity.objects.all()
    serializer_class = EntitySerializer