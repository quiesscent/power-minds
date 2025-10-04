from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import PublicationViewSet, SummaryViewSet, EntityViewSet

router = DefaultRouter()
router.register(r'', PublicationViewSet, basename='publication')
router.register(r'summaries', SummaryViewSet, basename='summary')
router.register(r'entities', EntityViewSet, basename='entity')

urlpatterns = [
    path('', include(router.urls)),
]